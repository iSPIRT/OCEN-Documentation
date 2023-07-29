---
sidebar_position: 1
---

# API Design Principles

## Async design

By design, all APIs are designed to enable end-to-end flows asynchronously. All requests use the requestId field for the purposes for mapping responses to their respective requests. And each request generates a standard acknowledgement from the other end while the callee (typically Lender) processes the request. API callers (typically LA) can poll for the status of the operation using a webhook. Thus each operation will have two separate APIs - one from the caller to submit the request and another async response back from the callee when the operation has completed.

For example: Create Loan Application operation has the following 2 APIs:
- CreateLoanApplicationRequest -> Request sent by LA to the Lender
- CreateLoanApplicationResponse -> Async Response sent by Lender to LA


## Idempotency

All request calls should be idempotent on the requestId field i.e. two calls to CreateLoanApplication with the same requestId shouldn’t result in two applications to be created. Callees are expected to return the same response as sent earlier for a duplicate request.
