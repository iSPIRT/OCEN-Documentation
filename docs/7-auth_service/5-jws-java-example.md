---
sidebar_position: 5
---
# JWS Examples

# Java Based Example for Signing HTTP responses

The following Java Spring Webflux code demonstrates the ReactiveResponseSigner class, which is a decorator for ServerHttpResponse, extending its functionality.

```java
// Class definition: A decorator for ServerHttpResponse
public class ReactiveResponseSigner extends ServerHttpResponseDecorator {

    public ReactiveResponseSigner(ServerHttpResponse response) {
        super(response);
    }

    // Override the writeWith method to sign the payload before writing the response
    @Override
    @Nonnull
    public Mono<Void> writeWith(@Nonnull Publisher<? extends DataBuffer> body) {
        // Convert the body into a Flux<DataBuffer>
        Flux<DataBuffer> buffer = Flux.from(body);
        // Override the writing of the body with a method that signs the payload
        return super.writeWith(buffer.doOnNext(dataBuffer -> {
            try (ByteArrayOutputStream stream = new ByteArrayOutputStream()) {
                // Write the payload into the stream
                Channels.newChannel(stream).write(dataBuffer.asByteBuffer().asReadOnlyBuffer());
                // Sign the payload
                String sign = sign(stream.toByteArray(), true);
                // Set the signature in the header
                getHeaders().set("Signature", sign);
            } catch (Exception e) {
                throw new IllegalStateException(e);
            }
        }));
    }

    // Sign the payload
    private <T> String sign(byte[] payload, boolean detached) throws JoseException {
        
        JsonWebSignature signerJws = new JsonWebSignature();
        signerJws.setPayloadBytes(payload);
        // Specify the algorithm to be used for signing
        signerJws.setAlgorithmHeaderValue("RS256");
        // Retrieve the JSON Web Key to be used for signing
        RsaJsonWebKey jwk = getJsonWebKey(); // your json web key
        signerJws.setKey(jwk.getPrivateKey());
        signerJws.setKeyIdHeaderValue(jwk.getKeyId());
        // If a detached signature is requested, do not include the payload in the JWS
        signerJws.getHeaders().setObjectHeaderValue("b64", !detached);
        // Return the appropriate serialization based on whether a detached signature is requested
        if (detached) {
            return signerJws.getDetachedContentCompactSerialization();
        } else {
            signerJws.setCriticalHeaderNames(new String[]{"b64"});
            return signerJws.getCompactSerialization();
        }
    }
}
```

# Java Based Example for verifying signatures

```java

public static void parseSignature(String detachedSignature, byte[] payload, RsaJsonWebKey jwk) throws JoseException {

    JsonWebSignature verifierJws = new JsonWebSignature();

    // Set the algorithm constraints for the signature verification
    verifierJws.setAlgorithmConstraints(new AlgorithmConstraints(ConstraintType.WHITELIST, new String[]{"RS256"}));

    verifierJws.setCompactSerialization(detachedSignature);

    if (payload != null) {
        payload.apply(verifierJws);
    }

    verifierJws.setKey(jwk.getPublicKey());

    if (!verifierJws.verifySignature()) {
        throw exception;
    }
}
```

# Node.js based Example for verifying signatures

```
const { JWS, JWK } = require('jose');
const { Writable } = require('stream');

class ReactiveResponseSigner {
    constructor(response, key) {
        this.response = response;
        this.key = key; 
    }

    // Method to sign the payload before sending the response
    writeWith(payloadStream, detached = true) {
        const buffers = [];

        // Collect the payload data from the stream
        payloadStream.on('data', (chunk) => {
            buffers.push(chunk);
        });

        // Once all data is collected, sign the payload and send the response
        payloadStream.on('end', async () => {
            try {
                const payload = Buffer.concat(buffers);
                const signature = await this.sign(payload, detached);

                // Set the signature in the response headers
                this.response.setHeader('Signature', signature);

                // Write the original payload to the response
                this.response.write(payload);
                this.response.end();
            } catch (error) {
                console.error('Error signing response:', error);
                this.response.statusCode = 500;
                this.response.end('Internal Server Error');
            }
        });
    }

    // Method to sign the payload
    async sign(payload, detached) {
        // Create the JWS signer with the payload
        const signer = new JWS.Sign(payload);
        
        // Set the algorithm and key to be used for signing
        signer.recipient(this.key, { alg: 'RS256', b64: !detached });

        // If detached, return the detached JWS; otherwise, return the full JWS
        if (detached) {
            return signer.sign('compact', { detached: true });
        } else {
            return signer.sign('compact');
        }
    }
}

module.exports = ReactiveResponseSigner;

```

Usage Example in Express.js

```
const express = require('express');
const { JWK } = require('jose');
const ReactiveResponseSigner = require('./ReactiveResponseSigner');

const app = express();

// JSON Web Key (JWK) 
const jwk = JWK.generateSync('RSA', 2048, { alg: 'RS256', use: 'sig' });

app.use((req, res, next) => {
    
    const signer = new ReactiveResponseSigner(res, jwk);

    // Mock payload stream 
    const payloadStream = new Writable({
        write(chunk, encoding, callback) {
            callback(); // No-op, this is a mock stream
        }
    });

    // Simulate the end of the payload with some content
    payloadStream.end(Buffer.from(JSON.stringify({ message: "Hello, World!" })));

    // Use the signer's writeWith method to sign and send the response
    signer.writeWith(payloadStream);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

```
