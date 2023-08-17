---
slug: credit-bureau-pull-in-ocen
title: Credit Bureau pull in OCEN 4.0
authors: wribhu
tags: [escrow, collections]
---

# Highlights

* OCEN 4.0 introduces auction based model where each loan application will be shared with multiple lenders. 
* Lenders rely heavily on Credit Bureau reports for loan underwriting and the traditional approach of doing a hard-pull by each lender may cause a reduction in borrowers score. 
* A consented soft pull done by the borrower’s agent emerges as the ideal path as it protects borrower’s score, yet keeps the borrower experience and transaction success rates high. 
* As a framework, OCEN 4.0 allows for 4 different ways of consent-based data-flows. Illustrated via the GST example.

<!--truncate-->

Lenders evaluate a borrower across two key aspects to assess the credit risk - the intent to pay, and the ability to pay. In traditional lending, most lenders underwrite using the credit bureau hard-pull to gauge the intent to pay.  Their underwriting models incorporate multiple inputs from the credit report which contains details on credit account information including payment history, account balances, when the account was opened, date of the last activity, credit limit on the account, debt collections and bankruptcies.

# Leveraging credit bureau report in OCEN 4.0

The launch of OCEN 4.0 brings about a fundamental shift to the traditional lending model where a single loan-application would be flashed to multiple lenders. In this **auction-based lending** model the borrower would receive multiple loan-offers and choose the best offer. The loan disbursal happens accordingly on the chosen offer from the chosen lender.

However, this could result in multiple bureau pings done by each lender for the same borrower  for each loan application. If the lenders were to fetch bureau data via a hard pull, the hard pulls would leave an enquiry trace and hence multiple enquiries in a short span will lead to drop in scores for the borrower. On the other hand, if the lenders were to fetch via Consented Soft pull (where the consumer authorizes the lender to do a bureau pull using an OTP) then the bureau data pull would leave no enquiry trace. But, if each lender attempted to acquire consent directly from the borrower, it would lead to a very poor experience for the borrower with too many OTPs in one go for the Loan Application. (Note that one other alternative for the lenders would be to do a Portfolio Soft Pull, which also would leave no enquiry trace but can only be done to existing borrowers in their portfolio. Since lenders may not have an existing loan relationship with the borrower, this approach would not be feasible). 

OCEN 4.0 solves the data fetch issue - how to protect the borrower score & also deliver a great borrower experience, by having a single soft-pull done by the Borrower Agent and forwarded to the participating lenders on behalf of the borrower.

The envisaged flow under this model is 
1. Borrower’s agent does a consented soft pull and shares the credit-report as part of the loan application
2. All the Lenders get the soft bureau report for them to decide on an offer and respond back
3. The borrower chooses a particular offer
4. The lender does a bureau pull (as the current regulations mandate lenders to do a pull before sanctioning a loan) and then initiates the disbursal. This bureau pull may have no impact on the underwriting decision as the same has already happened in step #2

![Flow](./bureau_pull.png)

# Leveraging other data for underwriting
The above model specifically focuses on fetching the credit bureau data in the multi-lender auction-based model with OCEN 4.0, given the nuances of hard vs soft bureau pull. 

For other types of data, OCEN 4.0 supports four distinct ways in which lenders can fetch consent-based datasets about the borrower for underwriting. 

![Fetch Datasets](./fetch_datasets.png)

1. **Direct from customer**: In this model, the lender gets the data directly from the borrower. E.g. Each lender can pull GST data with customer consent directly from the customer.
2. **Fetch via Account Aggregator (AA)**: Account Aggregator flow has become the default mode for getting bank-statements of applicants. With the upcoming release of AA,  GST data this model can be invoked to share the GST data with lenders.
3. **Data forward by Borrower Agents**: Borrowers can empower the borrower agents to share data with all the lenders on their behalf. Eg: The single soft-pull done by the Borrower Agent and forwarded to the participating lenders on behalf of the borrower is an example of this model. Similarly, in case of GST, the BA could collect the GST data from GST Service Providers and then on customers request pass that on to the various lenders
4. **Data from Derived Data Providers (DDPs)**: E.g. For a network of pharma-retailers as borrowers, the BA may work with the pharma companies to integrate into their ERPs and provide lenders with details of inventory, sales etc for applicants. The loan application journey would have the consent from the borrower empowering the lender(s) to pull data from the DDP.  Or in the GST example, GST filing service providers could double up as DDPs.

# OCEN 4.0 Data-flows, Products and Networks 

**What Data is Needed = Product Registry**

For a particular loan product, the data-sets required are captured at the product definition and are available in the Product Registry. E.g. Say a 45-day bullet repayment product for pharma retailers might require Bank statements, GST data and also credit bureau reports.

**How is the data collected = Network Configuration**
The above product may be available across multiple networks. And in some networks the GST data may be collected by the Borrower’s Agent and shared ahead with all lenders. While in some other networks, the BA may choose to let the GST data be collected by the lenders, individually.
This ensures that within the network , there is a consistent UI-UX and data-flow across products.

# Summary
OCEN 4.0 allows for 4 different models of data sharing thereby giving flexibility at a network level. These models enable borrower consent-based data fetch for different datasets for the lender to perform more accurate credit underwriting, while reducing the overhead of data sharing for the borrowers and borrower agents.
