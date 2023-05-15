---
sidebar_position: 1
---

# Overview

The following is a high-level sequence diagram of the OCEN 4.0 flow for the initial phases from Product creation through loan granting that highlights the role of the above components. The end-to-end flow can be split into 3 phases:

1. Onboarding
2. Loan Application and Processing
3. Post-Disbursement


## OCEN 4.0 Components

Apart from the API specification for the participants to communicate with each other, OCEN 4.0 includes 3 components that enable coordination between the different participants in the system -

1. Auth Service
2. Product Registry
3. Participant Registry

### Auth Service
The [Auth service](./components/auth_component) addresses two main concerns in the ecosystem:
1. Identity of the entity accessing an endpoint
2. Integrity and non-repudiation so entities cannot deny their actions after performing any operation

The Auth service enables both concerns by providing API access keys for authentication of every request as well as signing every request/response with the security certificates.

### Product Registry
[Product registry](./components/product_registry) is a web portal where Lenders in the OCEN ecosystem register their products. Once a product is created, participants such as BAs registered in the Participant registry will be able to view and subscribe to these products. The Product Registry allows BAs and other participants to easily discover new products for their borrowers from different lenders. The Product Registry also enables Lenders to reach new borrowers via the BAs that subscribe to the products.

### Participant Registry
[Participant Registry](./components/participant_registry) is a web portal where all the participants in the OCEN ecosystem register themselves. Post approval, participants will be able to fetch access keys to use in making the API calls.
