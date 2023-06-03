---
sidebar_position: 12
---

# FAQs

Following is a list of commonly asked questions around the OCEN 4.0 pilot.

## Product Creation and Registry

#### What type of products are we looking to pilot on OCEN 4.0?
We expect to see new and innovative set of products that are not available already for MSMEs, enabled by underwriting on new data sources (AA data + new data from platforms). We exect to see products where the tenure and Rate of Interest are not baked into the product but rather gets determined by the borrower data used in underwriting.

#### How will the loan interest rate get decided?
Lender decides the interest rate. But since borrower can get many offers, OCEN will lead to private innovation on underwriting side so that new lenders can give more competitive offers.

#### Is it better to have very specific product for borrowers or a more generic one?
The OCEN hypothesis is that everyone is lendable. If we want to increase penetration then we should go to a model where the product is custom and matches the needs of the borrower. Eg start with daily to then move to weekly collections for a rickshaw wallah. These would be separate products in the product registry that are served to the borrower as they start establishing credit trust.

## Policy

#### Will banks not have an advantage over NBFCs?
Parliamentary committee has already recommended concessional capital for NBFCs in a proposal. The recommendation should enable innovation to happen and level the playing field. 

## Data and underwriting

#### How can lenders verifify the authenticity / accuracy of new data?
Lenders are requested to use bank account statements of the borrower to do the additional validation. 

#### How will BAs get banking data without AA access to send to the lender?
Borrower Agents only facilitate the flow of data. BAs will redirect to AA and Lender will receive data directly from the bank.

#### Beyond CIBIL score - what other delay/default history will be available for lenders?
The current expectation is to rely on CIBIL score. There are mechanisms for soft pull which will ensure that the borrower will not be hit on their credit score. There is also a proposal for a new public credit registry (NFIR) which will take time to happen. 

## Borrower Agent role

#### Will BAs monetize via borrowers or Lenders?
Fees for the BA will come directly from the borrower. BAs are *agents of borrower* in the system and collecting fees from the lender will be a conflict of interest. We are expecting that RBI will introduce different guidelines than Digital Lending for OCEN’s Cash flow based lending. 

#### Can BA also play other roles?
BA can also play the other roles such as Disbursement Partner, Collections Partner etc. We are not restricting that. The only decoupling is between BA and Lender roles. 

#### Is it the BA’s responsibility to work with and convince the lender to create the product?
Our belief is that borrower has prior relationships with one or more Borrower Agents (or with entities that can become BAs). Whichever BA can bring more lenders to the table (and hence more offers) will incentivise the borrower to come to them. BAs have a strong vested interest to convince and to have many good lenders to the network. BAs can also plug in local partners for derived data providers, collections and disbursements partners to help reduce the risk / incentivise the lender and borrowers to join their network. We also believe that the borrower agent BA will create the product network with local partners while the lenders remain distant. The network being strong relies on the BA and their local partnerships.

## Loan Application and Processing

#### Will there be a cap for expected loan amount?
No. The Lender's offer will specify the loan amount. For example, The loan application may be for 50k but the offers might be for 40k and 45k with different terms from different lenders. BAs will have to guide the borrower on the merits of the offer.

#### What mechanisms are there for stopping a bad borrower from taking multiple loans etc?
This would be the role of PCR (Public Credit Registry). We have a de-dupe registry in OCEN which is a limited implementation of PCR and will ensure that borrowers are not able to take dual loans on same document.

#### What if borrower can pick multiple offers?
System will ensure only one offer gets picked. It is possible in the short term that the borrower applies with multiple BAs and tries to accepts offers from different BAs. The de-dupe registry will help with that scenario and we will continue to add more guardrails here.

#### Will Lender be able to change the interest rate or other parameters of the product post loan aproval?
The process is expected to be e2e digital and the BA and Borrower are smart to understand these issues if they happen. From the technical side, OfferID is carried on till the disbursement stage in the APIs so it is unlikely that attributes such as the rate of interest can get changed in the middle of the process.

