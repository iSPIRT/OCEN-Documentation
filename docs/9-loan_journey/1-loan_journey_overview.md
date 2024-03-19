---
sidebar_position: 1
---

# Loan Journey Stages

The steps in the lending jounery can be categorized into the following stages.

* **Stage 1:** *Auth APIs*, is a generic collection of Auth APIs used for all requests by all participants on the platform.
* **Stage 2:** *Onboarding*, is done via a UI portal and does not have APIs
* **Stages 3-5:** *Loan application prep* to *Offer selection to disbursement*, happen in sequence and depict the core loan application processing steps and involve the LA and Lender.
* **Stage 6:** *Post-disbursement*, varies for different products based on how collections are setup.
* **Stage 7:** *Partner APIs*, is the colection of APIs used by Lenders with other participants outside of LA.
* **Stage 8:** *Heartbeat and Analytics APIs*, is the colection of APIs that LA and Lender participants must call for the OCEN registry to maintain the overall network health.

| # | Stage | Explanation |
|-------|-------|---------|
| 1 | **Auth APIs** | APIs for authentication needed by all participants for all APIs |
| 2 | **Onboarding** | Portal based onboarding of participants and products onto the registries |
| 3 | **Loan application prep** | APIs that help prepare the loan application. Eg: Credit Guarantee APIs |
| 4 | **Application auction & offer** | APIs for Loan Application to be processed by multiple lenders |
| 5 | **Offer selection to disbursement** | APIs for offer selection, KYC, agreement, repayment and disbursement |
| 6 | **Post-disbursement** | APIs for steps post-disbursement. Eg: Repayment, Loan Details, Collections |
| 7 | **Partner APIs** | APIs involving partners (DDP, KYC, Collections, Disbursement partners) |
| 7 | **Heartbeat and Analytics APIs** | APIs for maintaining the health of the network |
