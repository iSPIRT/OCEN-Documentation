# Derived Data Providers

Derived Data Providers (DDPs) play a pivotal role in the OCEN 4.0 ecosystem by supplying additional data that significantly enhances the underwriting process. In an era where data is king, the OCEN protocol leverages not just the financial data digitally available through Account Aggregators (like banking data, GST data, NPS, equity etc.), but also additional auxiliary data coming from DDPs.

Entities from diverse fields can serve as DDPs, providing valuable contextual data that may offer insights into a borrower's financial health and reliability. For instance, Swiggy or Zomato could participate as DDPs in the OCEN system, offering earnings data from their platforms which can assist lenders in underwriting loans to restaurants.

In another scenario, consider Dairy Farmer Financing - dairies to which farmers sell their produce could register as DDPs. These dairies could then provide historic sales data, offering lenders a better picture of a farmer's consistent income, thus helping in the underwriting process.

This data, originating from diverse sources, needs to be organized and systematically presented, thus calling for a generic and versatile API that could be implemented by any data source wishing to participate as a DDP. 

## Design Principles

DDPs should be able to integrate seamlessly with the OCEN ecosystem and should be adaptable to various data structures. To cater to this the APIs are designed keeping in mind the following principles:

1. **Versioning**: To accommodate evolving data structures, APIs are designed to support versioning.
2. **Transparency**: To facilitate accurate and efficient data exchange and as each DDP can expose different schema of data the APIs expose methods to understand the expected request and response data structures.

## API Overview

The following APIs are designed to be implemented by a DDP:

1. **GET /ddp/versions**: This API provides a list of version IDs that the DDP supports, along with their descriptions. This ensures that the borrower's agent or lender is aware of the different versions of data schemas the DDP can provide.

2. **GET /ddp/{version}/dataRequestSchema**: This API presents a JSON schema detailing the structure of the DataRequest object. This ensures that the data request sent by the borrower's agent or lender to the DDP is correctly structured.

3. **GET /ddp/{version}/dataSchema**: This API returns a JSON schema describing the structure of the data provided by the DDP. This ensures that the borrower's agent or lender knows what to expect in the data response.

4. **POST /ddp/{version}/fetchData**: This API accepts a DataRequest object and returns the data associated with the request. It enables the actual data exchange between the DDP and the requesting participant.

By providing these APIs, DDPs will facilitate a structured, clear, and effective way to share valuable data in the OCEN ecosystem, aiming to improve the efficiency of underwriting processes and fostering data-driven decision-making.