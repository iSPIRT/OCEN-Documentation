---
sidebar_position: 8
---

# Stage: Heartbeat and Analytics APIs

## Heartbeat APIs

Lender and LA participants in the OCEN platform are expected to send Heartbeat APIs to the OCEN registry upon sending as well as upon receipt of every API call so that the registry can maintain the overall health at the network level.

### SubmitHearbeatEvent API

| Heartbeat Event Type | Caller and Callee Event Timing  |                                                                                 |
| ------------ | -------------------- | 
| LOAN_REQ | Sent by both Caller and Callee after Create Loan Application Request API |
| LOAN_RESP | Sent by both Caller and Callee after Create Loan Application Response API |
| CONSENT_REQ | Sent by both Caller and Callee after Consent Handle Request API |
| CONSENT_RESP | Sent by both Caller and Callee after Consent Handle Response API |
| LOAN_GEN_OFFER_REQ | Sent by both Caller and Callee after Generate Offers Request API |
| LOAN_GEN_OFFER_RESP | Sent by both Caller and Callee after Generate Offers Response API |
| LOAN_OFFER_REQ | Sent by both Caller and Callee after Set Offers Request API |
| LOAN_OFFER_RESP | Sent by both Caller and Callee after Set Offers Response API |
| TRIGGER_KYC_REQ | Sent by both Caller and Callee after Trigger KYC Request API |
| KYC_RESP | Sent by both Caller and Callee after Trigger KYC Response API |
| LOAN_ACCEPTANCE_REQ | Sent by both Caller and Callee after Trigger Loan Acceptance Request API |
| LOAN_ACCEPTANCE_RESP | Sent by both Caller and Callee after Trigger Loan Acceptance Response API |
| LOAN_GRANT_REQ | Sent by both Caller and Callee after Grant Loan Request API |
| LOAN_GRANT_RESP | Sent by both Caller and Callee after Grant Loan Response API |
| LOAN_REPAYMENT_REQ | Sent by both Caller and Callee after Set Repayment Plan Request API |
| LOAN_REPAYMENT_RESP | Sent by both Caller and Callee after Set Repayment Plan Response API |
| LOAN_DISBURSMENT_REQ | Sent by both Caller and Callee after Set Disbursement Account Request API |
| LOAN_DISBURSMENT_RESP | Sent by both Caller and Callee after Set Disbursement Account Response API |
| LOAN_TRIGGER_DISBURSMENT_REQ | Sent by both Caller and Callee after Trigger Disbursement Request API |
| LOAN_TRIGGER_DISBURSMENT_RESP | Sent by both Caller and Callee after Trigger Disbursement Response API |
| LOAN_TRIGGER_REPAYMENT_REQ | Sent by both Caller and Callee after Trigger Repayment Request API |
| LOAN_TRIGGER_COLLECTION_REQ | Sent by both Caller and Callee after Trigger Repayment Response API |

## Analytics APIs

Lenders in the OCEN platform are expected to send Analytics to the OCEN registry after every disbursement action made by them. This will be further used to provide a real-time dashboard to RBI. This dashboard will only be accessible to RBI and there will be no identifiers saved along with the metric. The purpose of high level reporting is to reduce the compliance cost for the Lender and help the regulator with Real-time metrics.

### SubmitLoanDisbursementMetrics API
API call by Lender to the OCEN registry for sharing the disbursed amount, agreed tenure, and interest rate for the loan post-disbursement.
