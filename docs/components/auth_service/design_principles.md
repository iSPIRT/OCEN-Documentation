---
sidebar_position: 2
---
# Design Principles

The OCEN Auth Service is designed with these key principles in mind:

- **Identity Verification:** Any entity accessing an endpoint must be properly identified. This service uses OAuth 2.0 and OpenID Connect protocols for this purpose, ascertaining that the identity claimed by an entity is indeed correct. This security measure ensures that access to data and services is controlled, preventing unauthorized entities from gaining access.

- **Integrity and Non-Repudiation:** Data integrity is crucial. The Auth Service ensures that data exchanged between entities is kept intact and unchanged, guaranteeing its authenticity and completeness. Non-repudiation ensures that an entity cannot deny the authenticity of their actions. This is achieved through digital signatures using the Detached JWS method.
No newline at end of file