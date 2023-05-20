# Security

This document describes the security aspects of OCEN and the security processes to be followed by OCEN participants while transmitting data over API calls. On a high level, this document addresses the following security aspects:

1. __HTTPS__ — All communications must happen securely over HTTPS
2. __Authorization__ — All communications must carry a dynamic & short-lived access token - issued by OCEN Auth Service - in order to associate an incoming request with a set of identifying credentials.
3. __Digital Signature__ — All communications must employ digital signing per the JSON Web Signature Specification, providing integrity and non-repudiation.
4. __Onboarding__: To ensure discoverability & interoperability, every participant must be part of the standard registries.

> Non-repudiation: The participats in OCEN cannot deny their actions after performing the operations.

> Possible extensions:  
> `mTLS` or `two-way TLS` as additional layer of security feature.

Every OCEN participant may be an API provider or an API client. In these roles:

1. API Clients need an access token to present to the API providers to authorize the calls.
2. API providers need access to the public key of token issuing OCEN Auth Service to validate the access token presented by an API client.
3. Upon identifying the API caller using the access token, API providers need access to the public key of the API caller available at the Gateway to verify the integrity of the digitally signed request sent by the API client.
4. Along similar lines to (3), API Clients, while receiving the response to their requests, also need access to the API Provider’s public key to verify the digitally signed response from the API provider.

Following is a sample interaction between a Lender and a Borrower Agent(BA), following the security guidelines mentioned here:

![Secure interaction sample between Borrower Agent(BA) & Lender](./img/secure-interaction-flow.png "Secure Interaction Flow")

1. Borrower Agent(BA) obtains an access token from Auth Service
    1. Uses the access token to fetch endpoint location of the lender(s).
2. Borrower Agent(BA) call lender(s), attaches the access token to `Authorization` header & attaches body `Signature` header as well.
3. Lender, fetches two keys, to validate incoming requests: 
    1. Public key of the Auth service to verify the Authorization header
    2. Public key of the Borrower Agent(BA), registered on the Gateway, to verify the Signature header.
4. Respond back to Borrower Agent(BA), with response body `Signature` header attached.
5. Borrower Agent(BA), fetches public key of the lender from gateway & processes the request if valid.

## Onboarding

In order to ensure interoperability between participants across the OCEN ecosystem. It is required to register with both Auth Service & Gateway (Registries).

![OCEN Onboarding](./img/ocen-onboarding.png "OCEN onboarding")

A well-formed document containing following details is expected from new participants to get onboarded to OCEN.

Parameter | Type | Description
--------- | ---- | -----------
version | String | API version of entity participating the network. Gateway is not dependent on this property. It is for Lender and Borrower Agent(BA) reference.
name | String | Legal Name of the participating entity
baseUrl | String (URL) | URL of the entity/module hosting all OCEN compliant API endpoints
ips | Array (String) | List of all IP addresses where others can send/receive requests.
inboundPorts | Array (Number) | List of inbound ports where the requester can send request to
outboundPorts | Array (Number) | List of ports from where an request can originate
certificate | JWK | Public JWK of the registered entity. This will be used for verifying the signatures present in the request and response header.

Once onboarded, Client Id & Secret will be issued to the participant.
Gateway registry is updated with participants details (API endpoint, Public key). Using the issued client credentials, participants can interact with Gateway Registries and further with rest of the OCEN participants.

### Offboarding

1. Using an established channel (email, slack, self-serve portal etc.) notify gateway administrators to trigger the offboarding process.
2. Client Id & Secret are deactivated and removed from the authentication service.
3. Participant entries are removed from Gateway registries, wherever applicable.

## Access token & Auth Service

OCEN Auth Service is a standards-compliant OAuth 2.0 authorization server, as well as, a OpenID Connect protocol implementation.

OpenID Connect extends OAuth 2.0. The OAuth 2.0 protocol provides API security via scoped access tokens.

Following sections provide detailed information about the endpoints that the Auth Service exposes.

| Endpoint Name | URI | Use |
| ------------- | --- | ----------- |
| Token Endpoint | `/token` | Obtain an access and/or ID token by presenting an authorization grant or refresh token. |
| Json Web Key Set Endpoint | `/certs` | Get public keys / certificates used to sign Auth Service responses (including tokens).
| OpenID Connect Well Known Configuration Endpoint | `/.well-known/openid-configuration` | Get OpenID Connect metadata related to the authorization server.

## Digital Signature

![Detached JWS](./img/detached_jws.png "Detached Json Web Signature")

### Detachted JWS

In the 'Detached Content' signature method, the generated JWS does not contain the content/payload part. Only the header and signature are returned. 

> A detached JWS is simply one where the payload is removed and provided elsewhere (for OCEN purposes the payload is provided in the HTTP body).

Other advantages of detached signatures are:
- request/responses that provide a malformed signature header can be rejected before ever reading the full HTTP body.
- isolation between message signing and business logic, from implementation perspective (as the HTTP body needs no manipulation).

As show in following diagram, **Detached JWS** is supplied in the HTTP header **Signature**.