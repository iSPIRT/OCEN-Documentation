---
sidebar_position: 2
---
# Secure API Calls Flow

Every OCEN participant may be an API provider or an API client. In these roles:

1. API Clients need an access token to present to the API providers to authorize the calls.
2. API providers need access to the public key of token issuing OCEN Auth Service to validate the access token presented by an API client.
3. Upon identifying the API caller using the access token, API providers need access to the public key of the API caller available at the Gateway to verify the integrity of the digitally signed request sent by the API client.
4. Along similar lines to (3), API Clients, while receiving the response to their requests, also need access to the API Provider’s public key to verify the digitally signed response from the API provider.

Following is a sample interaction between a Lender and a Loan Agent(LA), following the security guidelines mentioned here:

![Secure interaction sample between Loan Agent(LA) & Lender](./_images/secure-interaction-flow.png "Secure Interaction Flow")

1. Loan Agent(LA) obtains an access token from Auth Service
    1. Uses the access token to fetch endpoint location of the lender(s).
2. Loan Agent(LA) call lender(s), attaches the access token to `Authorization` header & attaches body `Signature` header as well.
3. Lender, fetches two keys, to validate incoming requests: 
    1. Public key of the Auth service to verify the Authorization header
    2. Public key of the Loan Agent(LA), registered on the Gateway, to verify the Signature header.
4. Respond back to Loan Agent(LA), with response body `Signature` header attached.
5. Loan Agent(LA), fetches public key of the lender from gateway & processes the request if valid.