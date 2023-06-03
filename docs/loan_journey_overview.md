---
sidebar_position: 9
---

# Lending Journey
The stages of the end-to-end lending journey is described below.

## Onboarding

| Step | Description |
| :----- | :-----      |
| Participant Registration | All participants register in the [Participant Registry](./participant_registry).|
| Product Creation | Lender creates a product and registers it in the [Product Registry](./product_registry).|
| Product Group Creation | BA creates a product group in the [Product Registry](./product_registry).|

## Application Processing

| Step | Description |
| :----- | :-----      |
| Loan Application Request | Borrower applies for a loan against a product via the BA who forwards the request to all the lenders in the product group.|
| Consent Flow | Lenders interested in the serving the borrower seek and obtain consent from the borrower via the BA for data pull. |
| Derived data Flow | Lenders work with the DDPs to fetch data and underwrite the loan for the borrower. |
| Offers Flow | Lenders notify the BA of their loan offers and complete the offer acceptance or rejection by the borrower. |
| KYC Flow | Lenders complete the KYC formalities with the borrower via BA post offer acceptance. |
| Collections Flow | BA and the Collections Partner help set the repayment methods for the borrower. |
| Repayment Terms| Lenders and borrower agree on the loan repayment terms. |
| Grant Loan | Lender and borrower complete successful signing of the loan agreement to create the actual loan in the lender’s system.|
| Disbursement Flow | Borrower informs the Lender about the chosen disbursement account and triggers loan disbursement. |

## Post-Disbursement & Other

| Step | Description |
| :----- | :-----      |
| Repayment Flow | Borrower initiates repayment on the loan. |
| Loan Status| Allows any authorized party to fetch the details of a loan.|
| Analytics | Heartbeat events invoked by OCEN participants for a loan application. |
