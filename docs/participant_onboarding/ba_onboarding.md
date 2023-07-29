---
sidebar_position: 3
---
# Loan Agent Onboarding

Below is the overview of the end-to-end flow from the perspective of a Loan Agent participant across the 3 phases of the OCEN 4.0 flow.

## Onboarding Phase
LAs first need to be onboarded onto the Participant Registry with their basic data. Once approved, they can use the API access key from the Participant Registry portal for making the API calls.

Loan Agents in the ecosystem will then be able to drive the product life cycle by inviting other necessary participants needed in the product’s loan workflow. Once registered in the portal, LAs can create a Product Group and invite other participants (Collections, Disbursement partners and Derived Data Providers) for a particular product.

LAs also need to select an SRO who will manage any dispute resolution issues for them and will serve as the guardrails against bad actors in the ecosystem.

There are no API calls and implementation in this phase.

## Loan Application and Processing Phase
LAs forward the Loan Application requests to the Lender. They then drive the Loan Application process with the lender by enabling the Lender to get Consent from the borrower and then to provide the loan Offer. Upon acceptance of the Offer by the borrower, the LA enables the Lender to perform the borrower KYC, confirm the loan disbursement and repayment terms with the borrower and then to grant the loan.

The handshake and the steps in this phase follow the APIs defined in the APIs list.

## Post-Disbursement Phase
Post-disbursement of the loan, any disputes from the borrower are forwarded to the Lender by the LA via the Loan Dispute APIs (see APIs list).

## Metadata APIs
In addition to the above, the LA will maintain a Heartbeat API (see APIs list) to indicate the health status of their systems to the rest of the network.


