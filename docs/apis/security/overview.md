---
sidebar_position: 1
---

# Overview

The OCEN ecosystem depends on all participants being able to seamlessly connect to each other for it’s smooth functioning. Seamless connection is enabled through a set of standards and protocols that guarantee interoperability amongst participants.

Participant Registry & Auth Service, combined together represent the OCEN ecosystem's infrastructure layer. They provide following features to ensure interoperability across the ecosystem:

- Registry of all participants’s API endpoints in the ecosystem.
- Public Key of each ecosystem participant to verify digitally signed requests and responses.
- A dynamic & short-lived [access token](./access_token.md), to authorize the API calls amongst the ecosystem participants.

These features are mapped to Participant Registry & Auth Service as follows:

| Feature                                  | Service              |
| ---------------------------------------- | -------------------- |
| Registry of all module’s API endpoints   | Participant Registry |
| Public Key of each ecosystem participant | Participant Registry |
| A dynamic & short-lived access token     | Auth Service         |

To enable these features, all participants must register with Auth Service as client, as well as on Participant Registry with their API endpoints & public key. The identifier assigned to each module must be the same on both Auth Service (client) & Gateway (in it’s registries and mappings).

> See [Participant Registry & Auth Service onboarding](#onboardingoffboarding) section for more details.

Each participant in the ecosystem may play the role of either being both or being one of an API provider and an API client to communicate with other modules. In these roles:

1. API Clients need an [access token](./access_token.md) to present to the API providers, for them to authorize the calls.
2. API providers need access to the public key of token issuing Auth Service, to validate the access token presented by an API client.
3. API providers, upon identifying the API caller using the access token, further need access to the public key of the API caller available at the Participant Registry to verify the integrity of digitally signed request sent by API client.
4. On similar lines to (3), API Clients, while receiving response to their requests, also need access to the API Provider’s public key to verify the digitally signed response from the API provider.

Participant Registry & Auth Service together facilitate easy, secure availability of the above information.

# Onboarding/Offboarding

As mentioned above, in order to ensure interoperability between modules across the OCEN ecosystem. All modules (ecosystem participants) are required to register with both Auth Service & Participant Registry.

## Onboarding

1. Reach out to Participant Registry administrators using an established channel (email, slack etc.) to get on boarded onto the OCEN ecosystem with following required details:
   - Participant Type
   - API Endpoint
   - Public Certificate Key
2. **Client Id & Secret** are issued as final output of this process using the Authentication Service.
3. Participant Registry is updated with participants details (API endpoint, Public key).

## Offboarding

1. Using an established channel (email, slack etc.) notify Participant Registry administrators to trigger the offboarding process.
2. Client Id & Secret are deactivated and removed from the authentication service.
3. Module API endpoint & public key entries are removed from Participant Registry.
4. All resource mappings are removed.

# Auth Service

Auth Service is a standards-compliant OAuth 2.0 authorization server, as well as, a OpenID Connect protocol implementation.

OpenID Connect extends OAuth 2.0. The OAuth 2.0 protocol provides API security via scoped [access tokens](./access_token.md), and OpenID Connect provides user authentication functionality.

Following sections provide detailed information about the endpoints that the Auth Service exposes.

## Endpoints Summary

| Endpoint Name                                    | URI                                 | Use                                                                                                              |
| ------------------------------------------------ | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Token Endpoint                                   | `/token`                            | Obtain an access and/or ID token by presenting an [authorization grant](#authorization-grants) or refresh token. |
| Json Web Key Set Endpoint                        | `/certs`                            | Get public keys / certificates used to sign Auth Service responses (including tokens).                           |
| OpenID Connect Well Known Configuration Endpoint | `/.well-known/openid-configuration` | Get OpenID Connect metadata related to the authorization server.                                                 |

## /token

> <mark>POST</mark> /token

This endpoint returns access tokens, ID tokens, and refresh tokens depending on the request parameters. For [client credentials](#client-credentials-flow) and refresh token flows, calling `/token` is the only step of the flow.

> **NOTE:** The `/token` endpoint requires client authentication. See [Client Authencation](#client-authentication) appendix section for more information on how to use the parameters in the request.

### Request Parameters

The following parameters can be posted as a part of the **URL-encoded form values** to the API.

| Parameter     | Type   | Required | Description                                                                                                                                                           |
| ------------- | ------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| grant_type    | String | Yes      | Can be one of: `client_credentials` or `authorization_code`. Determines the mechanism Auth Service uses to authorize the minting of the tokens.                       |
| scope         | String | No       | List of scopes to be included in the access token                                                                                                                     |
| code          | String | Maybe    | Required if `grant_type` is `authorization_code`. The value is what was returned from the [`/auth`](#auth) endpoint. The code has a lifetime of 300 seconds.          |
| code_verifier | String | Maybe    | Required if `grant_type` is `authorization_code` & `code_challenge` was specified in the original [`/auth`](#auth) request. This value is the code verifier for PKCE. |

### Response Properties

| Property     | Type    | Required | Description                                         |
| ------------ | ------- | -------- | --------------------------------------------------- |
| access_token | String  | Yes      | An access token                                     |
| token_type   | String  | No       | Type of token issued. E.g. Bearer                   |
| expires_in   | Integer | No       | The expiration time of the access token in seconds. |
| scope        | String  | No       | The scopes contained in the access token.           |

### Errors

| Error Id        | Description                                                                                                                                                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| invalid_client  | The specified `client_id` isn't found                                                                                                                                                                                                              |
| invalid_request | The request structure is invalid. For example, the basic authentication header is malformed, both header and form parameters are used for authentication, no authentication information is provided, or the request contains duplicate parameters. |
| invalid_scope   | The scopes list contains an invalid or unsupported value.                                                                                                                                                                                          |

### Response Samples

#### Success response

```sh
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8

{
    "access_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    "token_type" : "Bearer",
    "expires_in" : 3600,
    "scope" : "openid email"
}
```

#### Error response

```sh
HTTP 401 Unauthorized
Content-Type: application/json;charset=UTF-8

{
    "error" : "invalid_client",
    "error_description" : "No client credentials found."
}
```

## /auth

> <mark>GET</mark> /auth

This is a starting point for browser-based OpenID Connect flows such as the implicit and [authorization code flows](#authorization-code-with-pkce-flow). This request authenticates the user and returns tokens along with an authorization grant to the client application as a part of the callback response.

> Note: When making requests to the `/auth` endpoint, the browser (user agent) should be redirected to the endpoint. You can't use AJAX with this endpoint.

### Request Parameters

| Parameter             | Type   | Required | Description                                                                                    |
| --------------------- | ------ | -------- | ---------------------------------------------------------------------------------------------- |
| client_id             | String | Yes      | Obtained during OCEN participant registration                                                  |
| response_type         | String | Yes      | `code`, indicates that your server expects to receive an authorization code                    |
| redirect_uri          | String | Yes      | Indicates the URI to return the user to after authorization is complete                        |
| scope                 | String | Yes      | List of scopes to be included in the access token                                              |
| state                 | String | Yes      | A random string generated by your application, which you'll verify later                       |
| code_challenge        | String | Yes      | This is a base64-encoded version of the sha256 hash of the code verifier string                |
| code_challenge_method | String | Yes      | Eg. `S256` - Indicates the hashing method used to compute the challenge, in this case, sha256. |

# Appendix

## Authorization grants

### Client Credentials grant

Following image depicts access token generation using client credentials grant flow.

![Alt text](./img/auth_access_token_generation.png "Client Credentials Flow")

The Client Credentials flow is recommended for server-side (AKA confidential) client applications with no end user, which normally describes machine-to-machine communication. Your application needs to securely store its Client ID and secret & pass those to Auth Service in exchange for an access token.

At a high-level, this flow has the following steps:

1. Your client application (app) makes an authorization request to Auth Service using its client credentials.
2. If the credentials are accurate, Auth Service responds with an access token.
3. Your app uses the access token to make authorized requests to the API providers.
4. The API provider validates the token before responding to the request. See [Validate access token](./access_token.md#verify-access-token).

### References

- [How to verify an Access Token](./access_token.md#verify-access-token)
- https://aaronparecki.com/oauth-2-simplified/#single-page-apps
- https://example-app.com/pkce: to generate a secret and hash

## Client authentication

Some auth service endpoints may require client authentication. To make requests to these endpoints, you must include a header or parameter in the request depending on the authentication method that the application is configured with.

### Send as Basic Auth Header

Provide the `client_id` and `client_secret` values in the Authorization header as a [Basic auth](https://datatracker.ietf.org/doc/html/rfc7617) base64-encoded string with the **POST** request.

> Authorization: Basic ${Base64(<client_id>:<client_secret>)}

```sh
POST /token HTTP/1.1
Host: OCEN.auth.com
Authorization: Basic XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

grant_type=client_credentials
```

### Send client credentials in body

Provide the `client_id` and `client_secret` as additional parameters in the POST request body.

```sh
POST /token HTTP/1.1
Host: OCEN.auth.com

grant_type=client_credentials
&client_id=xxxxxxxxxx
&client_secret=xxxxxxxxxx
```
