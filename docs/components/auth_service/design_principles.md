---
sidebar_position: 2
---
# Design Principles

The OCEN Auth Service is designed with these key principles in mind:

- **Identity Verification:** Any entity accessing an endpoint must be properly identified. This service uses OAuth 2.0 and OpenID Connect protocols for this purpose, ascertaining that the identity claimed by an entity is indeed correct. This security measure ensures that access to data and services is controlled, preventing unauthorized entities from gaining access.

- **Integrity and Non-Repudiation:** Data integrity is crucial. The Auth Service ensures that data exchanged between entities is kept intact and unchanged, guaranteeing its authenticity and completeness. Non-repudiation ensures that an entity cannot deny the authenticity of their actions. This is achieved through digital signatures using the Detached JWS method.

Let's break down the usage of JWS:

**What is JWS (JSON Web Signature)?**

JWS represents content secured with digital signatures or Message Authentication Codes (MACs) using JSON-based data structures. It provides a mechanism to ensure the data's integrity and authenticity.

**Why Detached JWS?**

The standard JWS consists of three parts: Header, Payload, and Signature. In Detached JWS, the payload is not included in the signature structure itself, but instead, it is sent separately, usually as the HTTP body in an API request.

There are a few reasons for using Detached JWS:

1. **Efficiency:** By using Detached JWS, large payloads don't need to be included in the signed structure, reducing the overhead in the signature process, which is beneficial for performance and efficiency, especially with large payloads.
   
2. **Isolation:** Detached JWS allows for isolation between message signing and business logic. From an implementation perspective, the HTTP body needs no manipulation, thus keeping the signature and payload handling distinct and modular.

3. **Pre-validation:** Detached JWS provides the ability to reject malformed request/responses at the signature level, even before processing the HTTP body, thus reducing the impact of invalid or malicious requests.

**How is Detached JWS used in OCEN Auth Service?**

The OCEN Auth Service uses Detached JWS to sign and verify API requests and responses. For signing, the service creates a JWS with the header and signature but without the payload. This JWS is sent along with the actual HTTP request/response, which carries the payload.

For verifying, the service uses the public key (obtained from `/certs` endpoint) to verify the JWS signature against the payload in the HTTP request/response body. If the verification succeeds, it confirms that the payload is intact and hasn't been tampered with since it was signed. If the verification fails, it indicates that the payload may have been altered, and the request/response should be rejected.

It's worth noting that using Detached JWS requires all participants in the communication to follow the same convention, ensuring the signature can be correctly associated with its corresponding payload.