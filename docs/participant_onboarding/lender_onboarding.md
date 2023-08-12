---
sidebar_position: 2
---
# Lender Onboarding

Below is the overview of the end-to-end flow from the perspective of a Lender.

## Onboarding Phase
Lenders first need to be onboarded onto the Participant Registry with their basic data. Once approved, they can use the API access key from the Participant Registry portal for making the API calls.

Lenders will then create the product in the Product Registry portal with all necessary attributes such as:

1. Product category
2. Borrower types
3. Data requirements
4. Loan workflow configurations - Collections, Disbursement, etc.

Once a product has been created and added to the portal, all participants will be able to discover the product. Participants can then subscribe to any of the existing products that need their role as part of the product’s loan workflow.

The Lender will serve as the OWNER of the product and is the only participant who can change the product attributes subsequently.

Post product-creation, Lenders get added to Product Groups by Loan Agents to serve borrowers in their network. They then start receiving Loan Application requests.

There are no API calls and implementation in this phase.

## Loan Application and Processing Phase
Lenders receive Loan Application requests from the Loan Agent, request Consent from the borrower and initiate the loan Offer. Upon acceptance of the Offer, the Lender performs the borrower KYC, confirms the loan disbursement and repayment terms with the borrower and then grants the loan.

The handshake and the steps in this phase follow the APIs defined in the APIs list.

## Post-Disbursement Phase
Post-disbursement of the loan, any disputes from the borrower are handled by the Lender via the Loan Dispute APIs in the APIs list.

## Metadata APIs
In addition to the above, the Lender will maintain a Heartbeat API (see APIs list) to indicate the health status of their systems to the rest of the network.
