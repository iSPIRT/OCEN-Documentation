---
sidebar_position: 3
---
# Architecture Overview

### High-Level View:

The OCEN Auth Service is designed to be an integral component within the larger OCEN ecosystem. It serves as an intermediary that verifies the identity of users and ensures that their actions can be reliably traced and cannot be denied. This plays a critical role in providing security within the OCEN system.

The OCEN Auth Service leverages Keycloak, a powerful open-source Identity and Access Management (IAM) platform that supports OAuth 2.0 and OpenID Connect protocols. It is responsible for managing users, their roles, and their permissions within the OCEN environment. It provides a way to secure RESTful services and provide a platform for login and sign-up.

### Components:

The architecture of OCEN Auth Service involves the following components:

- **Keycloak:** Keycloak is at the heart of the OCEN Auth Service. It provides the features necessary for identity verification and non-repudiation. It holds user credentials and can use them to verify user identities.

- **OAuth 2.0 and OpenID Connect Protocols:** OAuth 2.0 is used for authorization, allowing users to verify their identity without sharing their credentials. OpenID Connect is an extension of OAuth 2.0 that provides authentication, allowing the system to verify the user's identity based on the authentication performed by an authorization server.

- **Endpoints:** The Auth Service provides three key endpoints:

  1. `/token`: This endpoint is used for obtaining access and/or ID tokens.
  
  2. `/certs`: This endpoint is used for obtaining the public keys or certificates used to sign Auth Service responses, including tokens.
  
  3. `/.well-known/openid-configuration`: This endpoint provides OpenID Connect metadata related to the authorization server.

- **Detached JWS Signatures:** As mentioned previously the Auth Service uses Detached JWS signatures for integrity and non-repudiation. These signatures provide a way to ensure that the data has not been tampered with while in transit and that the sender cannot deny sending the data.

### Communication Flow:

Here is a simplified communication flow in the OCEN Auth Service architecture:

1. A client initiates an authentication or authorization request to the OCEN Auth Service.

2. The Auth Service uses Keycloak to verify the client's identity and, if successful, issues an access and/or ID token to the client.

3. The client uses this token to authenticate and authorize itself when communicating with other services within the OCEN ecosystem.

4. When the client sends a request to another service, it includes the token in its request header. The receiving service then sends this token to the OCEN Auth Service.

5. The OCEN Auth Service verifies the token using the public keys obtained from the `/certs` endpoint. If the verification is successful, the receiving service processes the request. If not, it rejects the request.

This architecture provides a robust and secure mechanism for user authentication and authorization in the OCEN ecosystem, ensuring the integrity and non-repudiation of actions performed within the system.