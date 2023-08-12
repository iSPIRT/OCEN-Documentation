---
sidebar_position: 2
---

# Security
All participants must follow the security requirements while transmitting data over API calls. On a high level, these are the security aspects that need to be ensured.

1. HTTPS - All API calls must be done securely over HTTPS
2. Two-way TLS -  The system should use Two-way TLS to ensure that both parties can send the information securely
3. Digital Signature - All communication between the participants should be digitally signed as per the JSON Web Signature Specification


## What is two-way TLS/SSL

The credit system that we are building is an asynchronous system and we need to ensure that both systems follow Transport Layer Security (TLS) Protocol to communicate with each other. In Normal TLS, the client first checks the authenticity of the server. However, the server does not try to identify the client. Since, in our case, we need to verify the identities of both the systems involved, “Two Way SSL” needs to be used. "Two-Way SSL" is usually called TLS/SSL with client certificate authentication because both parties authenticate each other.
