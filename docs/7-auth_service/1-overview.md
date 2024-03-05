---
sidebar_position: 1
---

# Overview

The OCEN 4.0 Auth APIs perform two key elements of security on the platform:

1. **Identity Verification:** 
    * Ensure that all entities are properly identified. 
    * Auth APIs uses OAuth 2.0 and OpenID Connect protocols for the same.

2. **Integrity and Non-Repudiation:**
    * Ensure authenticity & completeness of data exchanged between entities
    * This is achieved through digital signatures

All participants must register on the Participant Registry with their API endpoints & public key. Each participant in the ecosystem may play the role of either being both or being one of an API Provider and an API Client to communicate with other modules. 

## Sample flow

Consider a sample API request in the platform from a client participant (say Loan Agent) to a Provider participant (say Lender).

**Client** needs to include an [access token](./3-access_token.md) in their call to present to the Provider so that Provider can authenticate and authorize the Client. Client can fetch its Auth Token from the OCEN Registry on the GenerateAccessToken API by passing in it's clientID and clientSecret.

**Provider** needs access to the public key of the Client to validate the access token presented by an API client. The access token includes the participantID of the Client. If the Provider does not have the public key of the Client, the Provider can fetch the public key of the Client by calling the GetParticipantDetails API to verify the integrity of digitally signed request sent by Client.

Both particpants switch roles when the Provider needs to send a response back to the Client. The details of the Secure Auth flow are described [here](./2-auth_flow.md).

![Auth API Flow](./_images/auth_api_flow.png "Auth API Flow")

## Participant Onboarding

1. Reach out to OCEN Registry administrators using an established channel (see FAQs for details) to get on boarded onto the OCEN ecosystem with following required details:
   - Participant Type
   - API Endpoint (base URL where other participants can call them)
   - Public Certificate Key
2. **Client ID & Client Secret** are issued to the participant as final output of this process.
3. OCEN Registry is updated with participants details (API endpoint, Public key).

## Participant Offboarding

1. Using an established channel (email, slack etc.) notify OCEN Registry administrators to trigger the offboarding process.
2. Client ID & Client Secret are deactivated and removed from the Auth component.
3. All resource mappings are removed.

