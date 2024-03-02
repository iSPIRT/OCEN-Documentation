---
sidebar_position: 2
---
# Secure API Calls Flow

Every OCEN participant may be an API Provider or an API Client. In these roles:
1. API Clients need an access token to present to the API Provider to authorize the calls.
2. API Provider need access to the public key of token issuing OCEN Auth Component to validate the access token presented by an API client.
3. Upon identifying the caller using the access token, API Provider need access to the public key of the API Client to verify the integrity of the digitally signed request sent by the API Client.
4. Along similar lines to (3), API Client, while receiving the response to their requests, also need access to the API Provider’s public key to verify the digitally signed response from the API Provider.

Following is a sample interaction between a Lender and a Loan Agent(LA), following the security guidelines mentioned here:
1. LA obtains an access token from Auth Component by calling the GenerateAccessToken API
2. LA fetches the endpoint location of the lender by caling the GetNetworkParticipantDetails API.
3. LA calls the lender, attaches its access token to `Authorization` header & attaches body `Signature` header as well.
4. Lender determines the ParticipantID of the LA from the access token
5. Lender fetches the public key of the LA, by caling the GetNetworkParticipantDetails API
6. Lender verifies the Signature header in the LA's request and proceeds to process the request

When the Lender responds back to LA, its includes own access token and response body `Signature` header attached as done by LA in steps 1-3. Similarly upon receiving the same from the Lender, LA fetches the public key of the Lender, verifies if the request is valid as done by Lender in Steps 4-5.

![Secure interaction sample between Loan Agent(LA) & Lender](./_images/secure-interaction-flow.png "Secure Interaction Flow")
