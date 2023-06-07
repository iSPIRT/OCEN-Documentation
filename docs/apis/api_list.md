---
sidebar_position: 3
---

# APIs List

Following is the list of all APIs part of the OCEN 4.0 specification.

## Loan Application APIs
| API Name | Caller | Callee | Description |
| ---- | ---- | ---- | ---- | 
| Create Loan Applications Request | BA | Lender | Create Loan applications endpoint available on Lender to be used by BA | 
| Create Loan Applications Response | Lender | BA | This is the response for Create Loan Applications but invoked by the lender. No offers are rolled out as part of this API. If the lender system finds preliminary information sufficient for doing the loan processing, it will send “PROCESSING” as the status. Otherwise, it can reject the application citing a reason for the same. | 

## Consent APIs
| API Name | Caller | Callee | Description | 
| ---- | ---- | ---- | ---- | 
| Consent Handle Request | BA | Lender | Create consent handle with Account Aggregator. This API is used to request the lenders to send a consent request for fetching the bank account statements, GST historical data. The lender (FIU) checks with the AA and creates a consent handle internally once this API is triggered | 
| Consent Handle Response | Lender | BA | Invoked by lender to send consent handle created in Account Aggregator. | 
| Consent State Update Request | BA | Lender | Invoked by BA to inform Lenders of the consent journey state once the customer has interacted with Account Aggregator | 
| Consent Status Request | Lender | BA | Invoked by Lender to get consent handle status from BA | 
| Consent Status Response | BA | Lender | Invoked by BA to send consent status to Lender | 

## Offers APIs
| API Name | Caller | Callee | Description | 
| ---- | ---- | ---- | ---- | 
|Generate Offers Request | BA | Lender | The BA sends this request to the lender to get the list of offers that the lender is willing to provide for the loan applications already shared. | 
| Generate Offers Response | Lender | BA | This API is invoked by the lender informing the borrower regarding the various loan offers that have been generated corresponding to each of the loan applications. This is a bulk API, where multiple loan offers can be sent to the borrower in one shot. | 
| Set Offer Request | BA | Lender | This API is invoked by the BA to inform the lender about the offer that the borrower has chosen for a particular loan application. | 
| Set Offer Response | Lender | BA | This API is invoked by the lender and is the asynchronous response to Set Offer Request API. | 

## KYC APIs
| API Name | Caller | Callee | Description | 
| ---- | ---- | ---- | ---- | 
| Trigger KYC Request | BA | Lender | Request by BA to initiate the KYC process of the borrower after successfully accepting the final offer. (OKYC if applicable and Udyam) | 
| Trigger KYC Response | Lender | BA | Response sent by Lender with the url for KYC details submission.  | 
| KYC Status Request | BA | Lender | Request sent by BA to get the KYC status. This API will be triggered just after the user completes the KYC process. The lender is supposed to provide a reference number in the first call. This method can be called later to know the status of KYC. | 
| KYC Status Response | Lender | BA | This API is called by the lender to inform the status of the KYC process. Lender is also supposed to inform the BA about the action required for | completing the KYC. | 

## Loan Acceptance APIs
| API Name | Caller | Callee | Description | 
| ---- | ---- | ---- | ---- | 
| Loan Agreement Request | BA | Lender | Request sent by BA to lender to initiate the loan acceptance steps beginning with asking for the loan agreement |
| Loan Agreement Response | Lender | BA | Response given by the lender with the loan agreement for the borrower | 
| Trigger Loan Acceptance Request | BA | Lender | Request sent by BA to lender to send an OTP to phone number associated with verified by individual KYC | 
| Trigger Loan Acceptance Response | Lender | BA | Response given by the lender for TriggerOTPRequest | 
| Verify Loan Acceptance Request | BA | Lender | This API is invoked by the BA when the user enters the OTP received on the mobile number and agrees to the terms of the agreement. The asynchronous response for this API should include the lender acknowledging the receipt of OTP and verifying if the user has entered the correct OTP that was shared by the lender. | 
| Verify Loan Acceptance Response | Lender | BA | This API is invoked by the Lender  when the OTP entered by the user is shared through the BA. This API acknowledges the receipt of OTP and verifies if the user has entered the correct OTP that was shared by the lender on the mobile number associated with the disbursement account. | 

## Repayment Plan APIs
| API Name | Caller | Callee | Description | 
| ---- | ---- | ---- | ---- | 
| Set Repayment Plan Request | BA | Lender | This API is invoked by the BA to inform the lender system about the details of the repayment plan that will be used by the borrower. | 
| Set Repayment Plan Response | Lender | BA | This API is invoked by the lender to the BA giving the payment url where he can enter details of repayment. | 
| Set Repayment Plan Status Request | BA | Lender | This API is used by BA to check the status of a previously initiated set repayment plan request. This API is called once the payment page of the lender is loaded and the borrower choses a repayment method associated with the chosen repayment plan. | 
| Set Repayment Plan Status Response | Lender | BA | This API is used by lenders to inform BA about the status of a previously initiated set Repayment.The API returns the status of the repayment plan that the borrower has chosen. In case, the borrower has chosen e-mandate as the repayment method in payment page url, the status of the repayment plan becomes ACTIVE only after successful authorization of the e-mandate on the PSP by the borrower. | 
| Confirm Repayment Request | Lender | BA | This API is used by lenders to inform BA about the status of a repayment handled directly by the lender (Triggered on Lender side - Payment on the branch or auto E-Mandate repayment). |

## Grant Loan APIs
| API Name | Caller | Callee | Description | 
| ---- | ---- | ---- | ---- | 
| Grant Loan Request | BA | Lender | This API is invoked by the BA once the borrower completes successful signing of the loan agreement to create the actual loan in the lender’s system. | 
| Grant Loan Response | Lender | BA | This method is called be the Lender when the Grant Loan processing is completed. This informs the borrower about the status of the loan in the lender system. Upon successful creation of a loan in the system, the lender returns all the details of the loan. | 

## Disbursement APIs
| API Name | Caller | Callee | Description | 
| ---- | ---- | ---- | ---- | 
| Set Disbursement Account Request | BA | Lender | This API is invoked by the BA to inform the lender about the disbursement account that the borrower has chosen. | 
| Set Disbursement Account Response | Lender | BA | This API is invoked by the lender to inform the BA regarding whether the lender has successfully set the disbursement account which was sent in SetDisbursementAccountRequest. |
| Trigger Disbursement Request | BA | Lender | This API is to be used when the borrower wants the money to be disbursed immediately. |
| Trigger Disbursement Response | Lender | BA | Response given by the lender for TriggerDisbursement |
| Trigger Disbursement Status Request | BA | Lender | This API is to be used by BA to check the status of a previously initiated disbursement request. |
| Trigger Disbursement Status Response | Lender | BA | Response given by lender for  a trigger Disbursement Status Request. |

## Trigger Repayment APIs
| API Name | Caller | Callee | Description | 
| ---- | ---- | ---- | ---- | 
| Trigger Repayment Request | BA | Lender | This API is invoked by the BA to inform the lender to trigger a repayment. This API will not be called when payment is routed to lender via collection agent. | 
| Trigger Repayment Response | Lender | BA | This API is invoked by the lender to the BA giving the lender payment page url from where the borrower can make the payment. Lender also generates an id for the payment which becomes the reference for BA to check the status of repayment. | 
| Trigger Repayment Status Request | BA | Lender | This API is used by BA to check the status of a previously initiated repayment transaction. In the case where collection is handled by Collection Management System (CMS), once the BA receives payment confirmation (including transaction reference number) from the Collection Management System, BA will send a request to the lender to check if a payment has been credited against the transaction Reference Number. | 
| Trigger Repayment Status Response | Lender | BA | This API is used by BA to check the status of a previously initiated repayment transaction. In the case where collection is handled by Collection Management System (CMS), once the BA receives payment confirmation (including transaction reference number) from the Collection Management System, BA will send a request to the lender to check if a payment has been credited against the transaction Reference Number. | 

## Loan Details APIs
| API Name | Caller | Callee | Description | 
| ---- | ---- | ---- | ---- | 
| Get Loan Request | BA | Lender | This API is invoked by the BA when the BA wants to get the details of the loan. | 
| Get Loan Response | Lender | BA | This method is called by the Lender and it returns all the details of the loan. | 
| Loan Summary Request | BA | Lender | Request raised by the BA to get the current summary of the loan | 
| Loan Summary Response | Lender | BA | Response given by lender for LoanSummary Request | 
| Loan Statement Request | BA | Lender | Request raised for getting the current loan account statement | 
| Loan Statement Response | Lender | BA | Response giving the Loan account statement | 
| List Loans Request | BA | Lender | This API is invoked by BA to get the list of loans given by lender for a borrower | 
| List Loans Response | Lender | BA | This API gives get the list of loans given by lender for a borrower | 

## Dispute APIs
| API Name | Caller | Callee | Description | 
| ---- | ---- | ---- | ---- | 
| Raise Dispute Request | BA | Lender | Request raised by BA to create a dispute in lender system |
| Raise Dispute Response | Lender | BA | Response given to BA by lender post RaiseDisputeRequest |
| Dispute Status Request | BA | Lender | This API is invoked by the BA to get the status of a dispute |
| Dispute Status Response | Lender | BA | This API is invoked by the Lender to send the status of a dispute |

## Analytics APIs
| API Name | Caller | Callee | Description | 
| ---- | ---- | ---- | ---- | 
| Analytics Heartbeat Push Request | All | OCEN 4.0 Auth Service | This API is used by participants to indicate healthy status of their service. |
| Analytics Metrics Push Request | All | OCEN 4.0 Auth Service | This API is used by participants to send metrics for analytics. |

## Derived Data Provider APIs
| API Name | Caller | Callee | Description | 
| ---- | ---- | ---- | ---- | 
| Register Derived Data Provider Schema | Derived Data Provider | Product Registry | This API is used by the Dervied Data Provider to register the schema with the Product Registry. Once registered, Lenders will be able to lookup the schema from the Product Regitsry and fetch data from the Derived Data Provider to underwrite the loan. |
| Get Schema by Derived Data Provider ID | Lender | Product Registry | This API is used by the Lender to lookup all schemas supported by a data provider. |
| Get Schema by Schema ID | Lender | Product Registry | This API is used by the Lender to lookup schema supported by a data provider using the schema ID. |
| Delete Schema by Schema ID | Derived Data Provider | Product Registry | This API is used by the Derived Data Provider to delete a registered schema from the Product Registr12y. |