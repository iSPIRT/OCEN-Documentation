---
sidebar_position: 1
---

# Loan Journey Stages

The steps in the lending jounery can be categorized into the following stages.

| Stage | Explanation |
-------
| Onboarding | Portal based onboarding of participants and products onto the registries |

| Auth APIs | APIs for authentication needed by all participants for all APIs |

| Loan application prep | APIs that help prepare the loan application. Eg: Credit Guarantee APIs |

| Application auction & offer | APIs for Loan Application to be processed by multiple lenders |

| Offer selection to disbursement | APIs for offer selection, KYC, agreement, repayment and disbursement |

| Post-disbursement | APIs for steps post-disbursement. Eg: Repayment, Loan Details, Collections |

| Partner APIs | APIs involving partners (DDP, KYC, Collections, Disbursement partners) |



## Onboarding

In the onboarding phase, all participants register themselves with OCEN, the lending product is created and the network of participants that will be serving the product gets setup. These are completed from a UI portal.

1. **Participant Registration**: All participants register in the Participant Registry.
2. **Product Creation**: Lender creates a product and registers it in the Product Registry.
3. **Product Group Creation**: LA creates a product group in the Product Registry.
