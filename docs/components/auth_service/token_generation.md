---
sidebar_position: 5
---
# Token Generation & Verification

OCEN's Auth Service uses the OAuth 2.0 protocol for token generation. A `/token` endpoint is exposed by the Auth Service, where entities can exchange an authorization grant or refresh token to obtain access and/or ID tokens. 

An access token is a credential representing the authorization of a specific application to access specific parts of a user's data. It is used to authenticate requests to the APIs. An ID token, on the other hand, contains claims about the authentication of an end-user by an Authorization Server and potentially other requested claims. It conveys the authenticated identity of the client.

## Token Verification and JWS Signature Validation

Verification of tokens and JWS signatures is a critical aspect of maintaining the security and integrity of communications within the OCEN ecosystem. This process comprises two main steps:

### Token Verification:

The verification of an access token involves inspecting the token to confirm that it is still valid and has been issued by the OCEN Auth Service. This process can be completed by making a request to the token introspection endpoint of the Auth Service. If the token is still valid, the Auth Service will respond affirmatively, and the request can proceed. 

### JWS Signature Validation:

Following token verification, the OCEN service receiving the request must also validate the JWS signature attached to the request. The JWS signature serves to ensure the integrity of the message and provide non-repudiation, ensuring that the sender cannot deny sending the message.

The process for validating the JWS signature involves the following steps:

1. The receiving service extracts the JWS signature from the request's `Authorization` header.
2. It then fetches the sender's public key from the Auth Service using the `/certs` endpoint.
3. The service then uses this public key to validate the JWS signature against the payload of the request. 
4. If the signature is valid, this confirms that the payload has not been tampered with during transit, and the request can proceed. If the signature is invalid, the request should be rejected, as this suggests the message may have been tampered with.

Through this two-step process of token verification and JWS signature validation, the OCEN ecosystem can maintain high levels of security and trust between all participants. 

## Postman Collection

A Postman collection for the OCEN Auth Service is available for testing and familiarization purposes. This collection is a set of pre-configured API requests to help you understand and test the Auth Service. You can access the collection at this link: [OCEN Auth Service Postman Collection](https://documenter.getpostman.com/view/12016555/2s8YYMmLDE)
