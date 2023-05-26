---
sidebar_position: 6
---
# JWS Examples

# Java Based Example for Signing HTTP responses

The following Java Spring Webflux code demonstrates the ReactiveResponseSigner class, which is a decorator for ServerHttpResponse, extending its functionality.

```java
// Class definition: A decorator for ServerHttpResponse
public class ReactiveResponseSigner extends ServerHttpResponseDecorator {

    public ReactiveResponseSigner(ServerHttpResponse response) {
        super(response);r;
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