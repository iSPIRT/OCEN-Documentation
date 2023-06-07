---
sidebar_position: 2
---

# Loan Journey Stages

The steps in the lending jounery for a borrower can be categorized into three stages as below.

## Onboarding

In the onboarding phase, all participants register themselves with OCEN, the lending product is created and the network of participants that will be serving the product gets setup.

1. **Participant Registration**: All participants register in the [Participant Registry](../components/participant_registry).
2. **Product Creation**: Lender creates a product and registers it in the [Product Registry](../components/product_registry).
3. **Product Group Creation**: BA creates a product group in the [Product Registry](../components/product_registry).
4. **Analytics:** Heartbeat events invoked by all participants for all their actions.

For more details, see the [components](../components/components_overview) section.

## Application Processing

In the application processing phase, the participants in the product group enble the borrowers to apply for a loan and complete the application process. 

This process involves the offer generation step where all lenders in the product group receive the loan application and respond with an loan offer to the borrower post underwriting using borrower's consented data from AA. Additionally, once the borrower selects an offer, the process involves KYC, deciding on the terms, agreement signing and finally loan disbursement.

1. **Loan Application Request:** Borrower applies for a loan against a product via the BA who forwards the request to all the lenders in the product group
2. **Consent Flow:** Lenders interested in the serving the borrower seek and obtain consent from the borrower via the BA for data pull.
3. **Derived data Flow:** Lenders work with the DDPs to fetch data and underwrite the loan for the borrower.
4. **Offers Flow:** Lenders notify the BA of their loan offers and complete the offer acceptance or rejection by the borrower.
5. **KYC Flow:** Lenders complete the KYC formalities with the borrower via BA post offer acceptance.
6. **Collections Flow:** BA and the Collections Partner help set the repayment methods for the borrower.
7. **Repayment Terms:** Lenders and borrower agree on the loan repayment terms.
8. **Grant Loan:** Lender and borrower complete successful signing of the loan agreement to create the actual loan in the lender’s system
9. **Disbursement Flow:** Borrower informs the Lender about the chosen disbursement account and triggers loan disbursement.

For more details, see the [participant onboarding](../participant_onboarding/participant_overview) section.

## Post-Disbursement

The loan journey post-disbursement includes flows for repayment, checking the loan status and dispute resolution in case of issues.

1. **Repayment Flow:** Borrower initiates repayment on the loan.
2. **Loan Status:** Allows any authorized party to fetch the details of a loan.
3. **Dispute Resolutions:** Allows the borrower to raise dispues and seek resolution.

For more details, see the [participant onboarding](../participant_onboarding/participant_overview) section.
