# NexChat: Project Overview & System Architecture

This document provides a comprehensive overview of **NexChat**, a scalable, multi-tenant WhatsApp Automation SaaS platform designed for modern customer engagement, AI-driven workflows, and team collaboration.

---

## 1. Project Vision
NexChat is envisioned as an enterprise-grade, developer-friendly WhatsApp automation and conversational CRM platform. Unlike typical clones, NexChat's vision is to empower organizations with intelligent, high-throughput, and customizable conversational workflows. We aim to bridge the gap between simple chat tools and heavy enterprise CRM systems by using the official Meta WhatsApp Cloud API coupled with a robust open-source developer foundation.

## 2. Problem Statement
Modern businesses struggle to engage customers on WhatsApp at scale due to:
- **API Complexity**: Managing Webhooks, message templates, rate limits, and media assets using the raw Meta WhatsApp Cloud API is technically complex.
- **Data Silos**: Conversations on WhatsApp are often disconnected from core customer data and CRM systems, resulting in fragmented context.
- **Collaborative Bottlenecks**: Single-user or basic multi-user setups do not scale for sales, support, and marketing teams working together.
- **Rigid Automation**: Standard chatbot tools lack the flexibility to execute custom API requests, update databases, or evaluate complex conditional trees.
- **High Costs & Clunky UI**: Competitors offer outdated interfaces and expensive pricing plans that do not scale with broadcast volumes.

## 3. Proposed Solution
NexChat solves these challenges by providing a modular, high-performance monorepo-based SaaS application:
- **Shared Team Inbox**: A real-time unified interface for agents to manage conversations collaboratively.
- **Dynamic Workflow Engine**: A visual automation builder capable of handling auto-replies, API integrations, and database triggers.
- **Integrated WhatsApp CRM**: Rich contact tracking with custom attributes, tags, and audience segmentation.
- **Meta-First Architecture**: Built directly on the official Meta WhatsApp Cloud API for maximum speed, security, and native feature support.
- **Developer-Centric**: Clear API endpoints, webhooks, and SDK hooks for custom expansions.

## 4. Target Users
NexChat serves the following customer personas:
- **Growth & Marketing Teams**: Seeking to send high-volume broadcast campaigns, run newsletters, and convert leads via interactive buttons/templates.
- **Customer Support & Sales Operations**: Needing a multi-agent shared inbox to handle inbound queries, tag conversations, and assign agents.
- **Developers & Tech Leads**: Looking for an API-first platform to integrate WhatsApp capabilities into existing billing, e-commerce, or internal tools.
- **SMEs & Enterprises**: Requiring strict data isolation, role-based access control, and robust analytics under a multi-tenant SaaS model.

---

## Core Product Modules

The platform is divided into modular building blocks that collaborate to deliver a unified SaaS experience.

```
┌────────────────────────────────────────────────────────────────────────┐
│                              NEXCHAT PLATFORM                          │
├────────────────────────────────────────────────────────────────────────┤
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────────┐  │
│  │    Dashboard     │  │  Live Chat/Inbox │  │       Contacts       │  │
│  └──────────────────┘  └──────────────────┘  └──────────────────────┘  │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────────┐  │
│  │Templates/Campaign│  │ Chatbot/Workflows│  │      Analytics       │  │
│  └──────────────────┘  └──────────────────┘  └──────────────────────┘  │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────────┐  │
│  │ Developer API/Web│  │ CRM Integrations │  │   Billing & Tenancy  │  │
│  └──────────────────┘  └──────────────────┘  └──────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

### 5. Core Product Modules Overview
NexChat splits functionality into specialized sub-systems. This separation allows frontend and backend modules to scale independently. Each module corresponds to discrete database schemas and business logic layers.

### 6. Dashboard
The core control panel providing tenants with an immediate status view of their WhatsApp operation:
- Real-time KPI cards: Daily active chats, template delivery rates, pending chats, and message counts.
- Quick navigation to active campaigns, template approvals, and inbox queues.
- System health alerts (e.g., webhook failure notifications, Meta API token expiration warnings).

### 7. Live Chat / Shared Inbox
A highly interactive, real-time messaging interface built using React, NestJS, and WebSockets (Socket.IO):
- **Agent Assignment**: Manual or automated routing of conversations to specific agents.
- **Internal Notes**: Ability for agents to chat internally within the thread of a customer conversation without the customer seeing.
- **Rich Media**: Support for images, videos, audio, documents, location shares, and interactive WhatsApp buttons.
- **Quick Replies**: Canned templates and responses to resolve common issues instantly.

### 8. Contacts
A central repository of customer details across the organization:
- Aggregated chat history, profile information, and activity timelines.
- Search, filter, and bulk import/export (CSV) tools.
- Auto-sync features from incoming WhatsApp messages (extracting profile name, phone number).

### 9. Contact Attributes
A flexible metadata framework allowing tenants to define custom fields for contacts (e.g., `lead_status`, `last_purchase_date`, `preferred_language`):
- Support for multiple data types: Text, Number, Boolean, Date, and Select dropdowns.
- Attributes are immediately available to the automation engine for conditional routing.

### 10. Tags
A lightweight labeling system for classifying contacts and conversations:
- Multi-colored tags (e.g., "VIP", "High Priority", "Pending Payment").
- Dynamic search and filter filters in the Shared Inbox and Campaign builders.

### 11. Audience Groups
Dynamic segmentation of contacts based on tags, attributes, and behavioral signals (e.g., "Users who joined via Broadcast X but have not bought yet"):
- Dynamic sync: Contacts automatically join or leave groups as their tags or attributes change.
- Primary target lists for Broadcast campaigns.

### 12. WhatsApp Templates
Management of Meta-approved Message Templates (Utility, Marketing, Authentication):
- In-app editor with dynamic variable mapping (e.g., `{{1}}` -> Contact Name).
- Direct synchronization with the Meta API to trigger, sync, and monitor approval status.
- Template category tracking and submission workflows.

### 13. Broadcasts
Bulk message campaign coordinator designed for high-throughput and strict compliance:
- Targeting specific Audience Groups or uploaded CSVs.
- Scheduling engine (send immediately or at a specific timezone/date).
- Smart rate-limiting and staggered sending to prevent WhatsApp phone number flaggings.
- Real-time statistics: Sent, Delivered, Read, Replied, and Failed statuses.

### 14. Chatbot
A robust automation execution environment:
- Trigger conditions: Keyword match, exact match, first-time contact, or custom webhook events.
- Structured replies: Multi-message responses, interactive menus, and template prompts.
- Handoff logic: Clean transitions from automated bot to a human agent, notifying the team.

### 15. CRM
A light sales pipeline layout directly connected to WhatsApp chats:
- Kanban board visualization of lead stages (e.g., Lead -> Contacted -> Demo -> Won).
- Deal value tracking and close date estimation.
- Activity logs recording every touchpoint.

### 16. Agents
Role-based workspace team management:
- Role Definitions: Administrator, Manager, and Agent.
- Access restrictions: Agents can be restricted to view only their assigned conversations or specific phone numbers.
- Shift management and status toggling (Online, Offline, Busy).

### 17. Analytics
Deep analytics dashboard tracking operational efficiency:
- **Agent Metrics**: Average response time (FRT), resolution time, and conversation volumes.
- **Campaign Metrics**: Delivery, read, and conversion rates per template.
- **Customer Metrics**: New vs. returning contacts, top-performing keywords, and contact retention.

### 18. Integrations
Pre-built connectors to third-party software:
- Webhook endpoints to feed WhatsApp events to external systems (e.g., Zapier, Make, internal servers).
- Native integrations with Shopify, HubSpot, Salesforce, and Google Sheets.

### 19. Developer API
An API-first interface enabling developer clients to:
- Programmatically send messages, templates, and media.
- Query contact profiles, search logs, and fetch active conversations.
- Manage template structures and manage webhooks.

### 20. Billing
SaaS subscription and usage management:
- Subscription plans linked to organization tiers (e.g., Starter, Pro, Enterprise).
- Meta consumption tracing: Charging for WhatsApp conversation segments according to Meta's pricing models.
- Auto-billing via Stripe or custom subscription providers.

---

## Project Differentiators

### 21. AI-Assisted Automation
NexChat integrates Generative AI models directly into the workflow:
- **AI Copilot**: Drafts replies for agents in the Live Chat based on organization knowledge bases or past conversation histories.
- **Smart Summarization**: Summarizes long chat histories when handing off to an agent.
- **Intent Detection**: Advanced text classifier that routes customers to correct flows based on semantic intent rather than strict keywords.

### 22. Scalability
- Built on a decoupled worker architecture using Redis and BullMQ.
- The web servers remain lightweight, delegating resource-heavy tasks (like sending a broadcast to 50k contacts) to background worker instances.
- Independent database connection pools optimized for fast read-write cycles.

### 23. Multi-Tenant Architecture
NexChat enforces strict multi-tenancy at the application and database level:
- Every data row in the PostgreSQL schema references an `organization_id`.
- Database queries are scoped via Prisma middleware to guarantee logical isolation.
- Real-time WebSocket namespaces are authenticated per-tenant.

---

## 24. Multi-Tenant Concept & Data Isolation

Data isolation is a fundamental non-functional requirement. NexChat utilizes a **logical isolation model** where all database tables include an `organization_id` column, and database queries are strictly parameterized or run through wrappers that apply tenant filters automatically.

### Tenant Organization Hierarchy

```
                      ┌──────────────────────┐
                      │    NexChat Platform  │
                      └──────────┬───────────┘
                                 │
         ┌───────────────────────┼───────────────────────┐
         ▼                       ▼                       ▼
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│  Organization A  │    │  Organization B  │    │  Organization C  │
├──────────────────┤    ├──────────────────┤    ├──────────────────┤
│ - Users / Agents │    │ - Users / Agents │    │ - Users / Agents │
│ - WA Account/Key │    │ - WA Account/Key │    │ - WA Account/Key │
│ - Contacts       │    │ - Contacts       │    │ - Contacts       │
│ - Conversations  │    │ - Conversations  │    │ - Conversations  │
│ - Campaigns      │    │ - Campaigns      │    │ - Campaigns      │
└──────────────────┘    └──────────────────┘    └──────────────────┘
```

### Logical Data Isolation Rules
1. **Database Queries**: All SELECT, UPDATE, and DELETE queries must include a filter on `organization_id` (e.g., `WHERE organization_id = current_tenant_id`).
2. **File Storage**: Uploaded files, media, and certificates are isolated inside tenant-specific folders in the object store (e.g., `storage.nexchat.io/tenants/{organization_id}/uploads/`).
3. **Queue Jobs**: BullMQ job payload schemas must embed the `organizationId` parameter. Worker processes validate permissions before executing the job.
4. **WebSocket Rooms**: WebSocket connections join a room uniquely named after the tenant's ID: `room:org:{organization_id}`. Real-time events are never emitted globally.

---

## 25. MVP Scope
The Minimum Viable Product (MVP) concentrates on:
1. Multi-tenant database schema and basic email/password authentication.
2. Webhook listener for Meta WhatsApp Cloud API.
3. Live Chat / Shared Inbox supporting text and image messages (sending and receiving).
4. Contact management with manual custom fields (attributes) and tags.
5. Meta WhatsApp Template synchronization and sending single templates.
6. A simple background queue worker for single-line Broadcast campaigns.

## 26. Development Philosophy
We adhere to:
- **Clean Architecture & Domain-Driven Design (DDD)**: Code is organized into clean domain boundaries.
- **Type Safety**: Strictly typed interfaces using TypeScript across both frontend and backend.
- **Testing**: Test-Driven Development (TDD) principles where business-critical services (like queues and webhooks) have robust unit and integration tests.
- **Documentation**: Code must be self-documenting; complex business rules must include inline markdown references.

## 27. Git Workflow
- All code changes occur on feature branches branched from `main`.
- Clean commit messages conforming to the Conventional Commits specification (e.g., `feat(api): add webhook route`, `fix(web): resolve chat scroll`).
- Merge requests must pass automated linting, type checks, and test suites.
- Strict rejection of destructive actions (e.g., force pushing to `main`).

---

## 28. High-Level System Architecture

NexChat decouples client interaction, asynchronous ingestion, data management, and outbound broadcasts into specialized tiers.

```
                  ┌───────────────────────┐
                  │    WhatsApp Users     │
                  └───────────┬───────────┘
                              │ (HTTPS/JSON)
                              ▼
                  ┌───────────────────────┐
                  │Meta WhatsApp Cloud API│
                  └───────────┬───────────┘
                              │
                              │ (HTTPS Webhook POST)
                              ▼
 ┌─────────────────────────────────────────────────────────┐
 │                     NestJS Backend                      │
 ├─────────────────────────────────────────────────────────┤
 │  ┌───────────────────────┐   ┌───────────────────────┐  │
 │  │  Webhook Controller   │   │    REST API Server    │  │
 │  └───────────┬───────────┘   └───────────▲───────────┘  │
 └──────────────┼───────────────────────────┼──────────────┘
                │                           │ (HTTPS JSON)
                │                           │
                ▼                           ▼
        ┌───────────────┐           ┌───────────────┐
        │  PostgreSQL   │           │Next.js/React  │
        │ (Prisma ORM)  │           │ (Tailwind)    │
        └───────────────┘           └───────────────┘
                ▲
                │ (State Store)
                ▼
        ┌───────────────┐
        │     Redis     │
        └───────┬───────┘
                │ (Job Queue Broker)
                ▼
      ┌──────────────────┐
      │  BullMQ Workers  │
      ├──────────────────┤
      │ - Broadcast      │
      │ - Automation     │
      │ - Scheduled      │
      └──────────────────┘
```

### Workflow Event Cycle
1. **Inbound Message**: Meta WhatsApp Cloud API triggers a POST webhook payload to our NestJS API.
2. **Webhook Ingestion**: NestJS validates the signature, writes the raw message log to PostgreSQL, and schedules a parsing job in Redis.
3. **Queue Processing**: BullMQ pick up the job, matches the customer contact, updates the active conversation, and triggers real-time Socket.IO broadcasts.
4. **Agent Action**: The agent views the update in the Next.js interface via Socket.IO events and posts a reply.
5. **Outbound Flow**: NestJS dispatches the agent reply to the Meta WhatsApp Cloud API endpoint using HTTP requests, closing the loop.

---

## 29. Technology Stack

### Frontend Monorepo App (`apps/web`)
- **Framework**: Next.js (React, Page Router or App Router configured for fast client-side rendering).
- **Language**: TypeScript (Strict Mode).
- **Styling**: Tailwind CSS for responsive layouts, combined with utility-first modular styling.
- **State Management & Real-Time**: React Context / Zustand, Socket.IO Client for real-time inbox synchronization.

### Backend Monorepo App (`apps/api`)
- **Framework**: NestJS (Modular structure, dependency injection framework).
- **Database Access**: Prisma ORM, providing type-safe schemas and migrations.
- **Real-Time Gateway**: Socket.IO integrated with NestJS Gateways.

### Database & Caching
- **Primary Database**: PostgreSQL (for users, contacts, messages, campaign states).
- **Key-Value Store**: Redis (for caching, token buckets, and queue structures).
- **Message Queue**: BullMQ (running jobs on top of Redis).

---

## 30. Future Expansion
Post-MVP goals include:
- **Visual Drag-and-Drop Workflow Builder**: A React-flow based configuration dashboard to design chatbot loops.
- **Multichannel Expansion**: Supporting Instagram DM, Facebook Messenger, and Telegram within the same shared inbox database structure.
- **AI Agent Automation**: Fully autonomous AI workers handling customer support and scheduling appointments using tool-calling agent loops.
- **Enterprise SSO & White-labeling**: Features to allow reseller hosting under custom domain names.
