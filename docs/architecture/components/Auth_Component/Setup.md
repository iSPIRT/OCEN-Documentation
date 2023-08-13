---
sidebar_position: 4
---
# Setup

All participants in the OCEN ecosystem will be onboarded into the Participant registry as well as Auth Service.
When setting up and onboarding a participant(for e.g. a lender) onto the OCEN Auth Service, several steps are necessary:

1. **Create a Client:**
   
    The first step in the onboarding process involves creating a 'Client' in the Keycloak system for the participants. This Client represents the participants's application and defines its security settings. The creation of the Client would be handled by the administrator of the OCEN Auth Service and involves setting up the necessary OAuth 2.0 settings, such as the client type, access type, and valid redirect URIs.

2. **Configure Client Credentials:**

    The next step is to set up the Client's credentials. These credentials are used by the participants's application to authenticate with the OCEN Auth Service and obtain access tokens. The credentials consist of a 'Client ID' and a 'Client Secret', both of which should be securely stored by the participants.

3. **Configure Roles and Permissions:**

    Depending on the roles and permissions that the participants needs, these can be set up in the Keycloak system. For example, a lender might have a 'lender' role with permissions to access loan-related resources. Claims can be setup to restrict a participant to specific product networks.

4. **Issue Access Tokens:**

    Once the Client is set up and configured, the participants's application can then authenticate with the OCEN Auth Service using its Client ID and Client Secret. Upon successful authentication, the OCEN Auth Service will issue an access token to the participants's application. This access token can then be used to access other services within the OCEN ecosystem.

5. **Register Public Keys:**

    To ensure secure communication, the participants's application should also register its public key (part of its SSL/TLS certificate) with the OCEN Participant Registry. This key will be used to verify the detached JWS signatures of the participants's requests.
