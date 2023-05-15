---
sidebar_position: 4
---

# Participant Overview

The following is a high-level sequence diagram of the OCEN 4.0 flow for the initial phases from Product creation through loan granting that highlights the role of the above components. The end-to-end flow can be split into 3 phases:

1. Onboarding
2. Loan Application and Processing
3. Post-Disbursement

## Lender Overview

Below is the overview of the end-to-end flow from the perspective of a Lender.

### Onboarding Phase
Lenders first need to be onboarded onto the Participant Registry with their basic data. Once approved, they can use the API access key from the Participant Registry portal for making the API calls.

Lenders will then create the product in the Product Registry portal with all necessary attributes such as:

1. Product category
2. Borrower types
3. Data requirements
4. Loan workflow configurations - Collections, Disbursement, etc.

Once a product has been created and added to the portal, all participants will be able to discover the product. Participants can then subscribe to any of the existing products that need their role as part of the product’s loan workflow.

The Lender will serve as the OWNER of the product and is the only participant who can change the product attributes subsequently.

Post product-creation, Lenders get added to Product Groups by Borrower Agents to serve borrowers in their network. They then start receiving Loan Application requests.

There are no API calls and implementation in this phase.

### Loan Application and Processing Phase
Lenders receive Loan Application requests from the Borrower Agent, request Consent from the borrower and initiate the loan Offer. Upon acceptance of the Offer, the Lender performs the borrower KYC, confirms the loan disbursement and repayment terms with the borrower and then grants the loan.

The handshake and the steps in this phase follow the APIs defined in the APIs list.

### Post-Disbursement Phase
Post-disbursement of the loan, any disputes from the borrower are handled by the Lender via the Loan Dispute APIs in the APIs list.

### Metadata APIs
In addition to the above, the Lender will maintain a Heartbeat API (see APIs list) to indicate the health status of their systems to the rest of the network.

## BA Overview

Below is the overview of the end-to-end flow from the perspective of a Borrower Agent participant across the 3 phases of the OCEN 4.0 flow.

### Onboarding Phase
BAs first need to be onboarded onto the Participant Registry with their basic data. Once approved, they can use the API access key from the Participant Registry portal for making the API calls.

Borrower Agents in the ecosystem will then be able to drive the product life cycle by inviting other necessary participants needed in the product’s loan workflow. Once registered in the portal, BAs can create a Product Group and invite other participants (Collections, Disbursement partners and Derived Data Providers) for a particular product.

BAs also need to select an SRO who will manage any dispute resolution issues for them and will serve as the guardrails against bad actors in the ecosystem.

There are no API calls and implementation in this phase.

### Loan Application and Processing Phase
BAs forward the Loan Application requests to the Lender. They then drive the Loan Application process with the lender by enabling the Lender to get Consent from the borrower and then to provide the loan Offer. Upon acceptance of the Offer by the borrower, the BA enables the Lender to perform the borrower KYC, confirm the loan disbursement and repayment terms with the borrower and then to grant the loan.

The handshake and the steps in this phase follow the APIs defined in the APIs list.

### Post-Disbursement Phase
Post-disbursement of the loan, any disputes from the borrower are forwarded to the Lender by the BA via the Loan Dispute APIs (see APIs list).

### Metadata APIs
In addition to the above, the BA will maintain a Heartbeat API (see APIs list) to indicate the health status of their systems to the rest of the network.

