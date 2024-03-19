---
sidebar_position: 8
---

# Heartbeat APIs

Lender and LA participants in the OCEN platform are expected to send Heartbeat APIs to the OCEN registry after every API call so that the registry can maintain the overall health of the loan product and the product network.

## SubmitHearbeatEvent API

| LOAN_REQ | Sent by LA after Create Loan Application Request API |
| LOAN_RESP | Sent by Lender after Create Loan Application Response API |
| CONSENT_REQ | Sent by LA after Consent Handle Request API |
| CONSENT_RESP | Sent by Lender after Consent Handle Response API |
| LOAN_GEN_OFFER_REQ | Sent by LA after Generate Offers Request API |
| LOAN_GEN_OFFER_RESP | Sent by Lender after Generate Offers Response API |
| LOAN_OFFER_REQ | Sent by LA after Set Offers Request API |
| LOAN_OFFER_RESP | Sent by Lender after Set Offers Response API |
| TRIGGER_KYC_REQ | Sent by LA after Trigger KYC Request API |
| KYC_RESP | Sent by Lender after Trigger KYC Response API |
| LOAN_ACCEPTANCE_REQ | Sent by LA after Trigger Loan Acceptance Request API |
| LOAN_ACCEPTANCE_RESP | Sent by Lender after Trigger Loan Acceptance Response API |
| LOAN_GRANT_REQ | Sent by LA after Grant Loan Request API |
| LOAN_GRANT_RESP | Sent by Lender after Grant Loan Response API |
| LOAN_REPAYMENT_REQ | Sent by LA after Set Repayment Plan Request API |
| LOAN_REPAYMENT_RESP | Sent by Lender after Set Repayment Plan Response API |
| LOAN_DISBURSMENT_REQ | Sent by LA after Set Disbursement Account Request API |
| LOAN_DISBURSMENT_RESP | Sent by Lender after Set Disbursement Account Response API |
| LOAN_TRIGGER_DISBURSMENT_REQ | Sent by LA after Trigger Disbursement Request API |
| LOAN_TRIGGER_DISBURSMENT_RESP | Sent by Lender after Trigger Disbursement Response API |
| LOAN_TRIGGER_REPAYMENT_REQ | Sent by LA after Trigger Repayment Request API |
| LOAN_TRIGGER_COLLECTION_REQ | Sent by Lender after Trigger Repayment Response API |

# Analytics APIs

Lenders in the OCEN platform are expected to send Analytics to the OCEN registry after every disbursement action made by them. This API call ensures that the registry can maintain a high level metric on the amount disbursed by the platform.

## SubmitLoanDisbursementMetrics API
API call by Lender to the OCEN registry for sharing the disbursed amount, agreed tenure, and interest rate for the loan post-disbursement.
