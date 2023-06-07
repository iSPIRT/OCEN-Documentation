---
sidebar_position: 8
---

# Participant Registry
The Participant Registry component of the OCEN 4.0 ecosystem is designed to facilitate the efficient management of participant information. It enables the storage, retrieval, and modification of participant details, ensuring seamless interactions between various parties involved in the lending process.

## Purpose
In a complex lending ecosystem like OCEN 4.0, there are multiple participants, each with distinct roles and responsibilities. These participants include Lenders, Borrower Agents (BAs), Derived Data Providers (DDPs), Disbursement Agents (DAs), and Collections Agents (CAs).

To enable smooth collaboration among these participants, it's essential to maintain a centralized registry that stores their details, such as API endpoints, Public keys, encryption details, and other relevant data. The Participant Registry serves this purpose, acting as a one-stop repository for such participant information.

When a participant joins the OCEN 4.0 ecosystem, the following information is recorded in the Participant Registry:

1. Unique identifier (id): A unique identifier assigned to each participant to ensure easy identification within the system.
2. Name (name): The participant's name, representing their organization or legal entity.
3. Version (version): The version of the participant's software or services, helping in compatibility management and coordination among participants.
4. Base URL (baseUrl): The base URL of the participant's APIs, enabling seamless integration and communication between parties.
5. Status (status): The current status of the participant within the ecosystem, e.g., active, inactive, or suspended.
6. IP addresses (ips): The participant's IP addresses, facilitating secure and controlled access to the ecosystem. IP addresses and ports help in whitelisting endpoints.
7. Inbound and outbound ports (inboundPorts, outboundPorts): The port numbers used by the participant for incoming and outgoing communication.
8. Certificate (certificate): The participant's SSL/TLS certificate, ensuring secure and encrypted communication between parties.

The Participant Registry offers several benefits to the OCEN 4.0 ecosystem:

- Centralized information storage: The registry provides a single source of truth for all participant information, ensuring easy access and management.
- Simplified onboarding: As new participants join the ecosystem, the registry simplifies the process of registering their details and integrating them into the system.
- Efficient collaboration: By maintaining up-to-date participant information, the registry enables seamless interactions and collaboration among various parties.
- Enhanced security: The registry helps ensure secure communication between participants by storing and managing SSL/TLS certificates and IP addresses.