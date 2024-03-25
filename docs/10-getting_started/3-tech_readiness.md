---
sidebar_position: 3
---
# 2. Tech Readiness
The tech readiness step requires that the participant implements the OCEN Specs for their role as described at [OCEN 4.0 APIs](https://ocen.dev/apis). Note that implementation of the OCEN Spec can be completed without receiving the credentials from the [onboarding step](./2-participant_onboarding.md). 

This requires the following: 
1. Implementation of Auth
2. Implementation of Partcipant APIs

## Implementation of Auth

All participants must implement the authentication module to communicate with the OCEN registry and other participants. The details of the auth mechanism is already noted in the [Auth and Security](../7-auth_service/1-overview.md) section.

### OCEN-AuthStarter Project

Participants may choose to use the [OCEN-AuthStarter Project](https://github.com/iSPIRT/OCEN-AuthStarter) for understanding and implementing the auth menchanism. The project is an implementation of the Auth module in Java for a sample LA and a sample Lender role. 

For each of those roles, the Auth module at the caller (client) performs the following:
1. Client calls the OCEN registry to fetch the access token
2. Client generates the paylod specific signature
3. Client makes an API call to the Provider with the signature and the token in the header

The Auth verification at the callee (Provider) performs the following:
1. Verifies the token from the public key URL in the OCEN registry  
2. Fetches the Client's public key from the OCEN registry
3. Verifies the JWS Signature in the request before processesing the client request

## Implementation of Partcipant APIs

All participants must implement the OCEN Specs for their role as described at [OCEN 4.0 APIs](https://ocen.dev/apis). Implementation of any role requires communication with other participants in the network, especially since the OCEN 4.0 APIs follow a [Async design](../8-api_design_principles.md). An easy implementation and validation of the API specs for a given role (such as LA) will require a mock participants (such as a mock Lender) to be created that can return a configured response.

### OCEN-AuthStarter Project

The [OCEN-AuthStarter Project](https://github.com/iSPIRT/OCEN-AuthStarter) has an implementation of a sample LA and a sample Lender, sample product and a product network, and UAT config credentials for each role. The project allows for a sample `CreateLoanApplication` API call to be sent from the LA to Lender and a sample `CreateLoanApplicationResponse` API call to be sent from the Lender back to the LA. 

The project may be used as a refernce to build out the API specs.

