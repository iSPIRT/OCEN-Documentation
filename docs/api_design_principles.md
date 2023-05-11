---
sidebar_position: 5
---

# API Design Principles

## Async design

By design, all APIs are designed to enable end-to-end flows asynchronously. All requests use the requestId field for the purposes for mapping responses to their respective requests. And each request generates a standard acknowledgement from the other end while the callee (typically Lender) processes the request. API callers (typically BA) can poll for the status of the operation using a webhook. Thus each operation will have two separate APIs - one from the caller to submit the request and another async response back from the callee when the operation has completed.

For example: Create Loan Application operation has the following 2 APIs:
- CreateLoanApplicationRequest -> Request sent by BA to the Lender
- CreateLoanApplicationResponse -> Async Response sent by Lender to BA


## Idempotency

All request calls should be idempotent on the requestId field i.e. two calls to CreateLoanApplication with the same requestId shouldn’t result in two applications to be created. Callees are expected to return the same response as sent earlier for a duplicate request.


## Security
All participants must follow the security requirements while transmitting data over API calls. On a high level, these are the security aspects that need to be ensured.

1. HTTPS - All API calls must be done securely over HTTPS
2. Two-way TLS - The system should use Two-way TLS to ensure that both parties can send the information securely
3. Digital Signature - All communication between the participants should be digitally signed as per the JSON Web Signature Specification
4. Post participant registration with the Participant Registry, the private / public keys for authentication will be available in the portal

### What is two-way TLS/SSL

The credit system that we are building is an asynchronous system and we need to ensure that both systems follow Transport Layer Security (TLS) Protocol to communicate with each other. In Normal TLS, the client first checks the authenticity of the server. However, the server does not try to identify the client. Since, in our case, we need to verify the identities of both the systems involved, “Two Way SSL” needs to be used. "Two-Way SSL" is usually called TLS/SSL with client certificate authentication because both parties authenticate each other.


