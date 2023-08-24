---
sidebar_position: 6
---
# Auth APIs

Auth Service is a standards-compliant OAuth 2.0 authorization server, as well as, a OpenID Connect protocol implementation.

OpenID Connect extends OAuth 2.0. The OAuth 2.0 protocol provides API security via scoped [access tokens](./3-access_token.md), and OpenID Connect provides user authentication functionality.

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

![Alt text](./_images/auth_access_token_generation.png "Client Credentials Flow")

The Client Credentials flow is recommended for server-side (AKA confidential) client applications with no end user, which normally describes machine-to-machine communication. Your application needs to securely store its Client ID and secret & pass those to Auth Service in exchange for an access token.

At a high-level, this flow has the following steps:

1. Your client application (app) makes an authorization request to Auth Service using its client credentials.
2. If the credentials are accurate, Auth Service responds with an access token.
3. Your app uses the access token to make authorized requests to the API providers.
4. The API provider validates the token before responding to the request. See [Validate access token](./3-access_token.md#verify-access-token).

### References

- [How to verify an Access Token](./3-access_token.md#verify-access-token)
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
