---
sidebar_position: 1
---
# Intro

OCEN Auth Service is a standards-compliant OAuth 2.0 authorization server, as well as, a OpenID Connect protocol implementation.

OpenID Connect extends OAuth 2.0. The OAuth 2.0 protocol provides API security via scoped access tokens.

The Auth service addresses two main concerns in the ecosystem:

1. Identity of the entity accessing an endpoint
2. Integrity and non-repudiation so entities cannot deny their actions after performing any operation

The Auth service enables both concerns by providing API access keys for authentication of every request as well as signing 
every request/response with the security certificates.