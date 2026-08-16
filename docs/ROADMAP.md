# NexChat: Project Roadmap

This document outlines the systematic, phased implementation roadmap for NexChat. Development is organized into 21 logical phases (Phases 0 through 20) to ensure a stable, scalable, and highly maintainable rollout.

---

## Phase 0: Project Foundation
* **Goal**: Establish repository scaffold, tooling configurations, and core baseline documentation.
* **Features**: Monorepo scaffolding, coding guidelines, CI hook configurations, and basic git policies.
* **Development Tasks**:
  1. Configure comprehensive `.gitignore` rules.
  2. Setup root `package.json` specifying yarn/npm workspaces for `apps/*` and `packages/*`.
  3. Author primary documentation (`README.md`, `PROJECT_OVERVIEW.md`, `ROADMAP.md`).
* **Testing Requirements**: Check syntax and formatting of markdown files.
* **Documentation Requirements**: Document monorepo setup guidelines, workspace directory structures, and git workflow expectations.

## Phase 1: Core Infrastructure
* **Goal**: Bootstrap frontend, backend, and DB tooling scaffolding.
* **Features**: Working Next.js frontend shell, NestJS backend API container, and Prisma PostgreSQL structure.
* **Development Tasks**:
  1. Initialize Next.js app in `apps/web` with TypeScript and Tailwind CSS.
  2. Initialize NestJS app in `apps/api` with module structure.
  3. Initialize Prisma ORM in `packages/database` or `apps/api`, including initial migration configurations.
  4. Docker Compose config for local PostgreSQL and Redis containers.
* **Testing Requirements**:
  - Run build checks on both `apps/web` and `apps/api`.
  - Validate database connection ping and clean migration apply.
* **Documentation Requirements**: Local setup manuals and Docker container orchestration commands in `docs/DEVELOPER_GUIDE.md`.

## Phase 2: Authentication and Organizations
* **Goal**: Build tenant isolation boundaries and user access controls.
* **Features**: Multi-tenant database schema, user sign-up/login, JWT authorization, and tenant context middleware.
* **Development Tasks**:
  1. Design database schemas for `Organization`, `User`, and `Session`.
  2. Implement backend JWT authentication services.
  3. Implement Prisma middleware to auto-inject `organization_id` into queries.
  4. Build login, sign-up, and organization onboarding screens in Next.js.
* **Testing Requirements**:
  - Unit tests for JWT helper functions.
  - Integration tests validating that User A from Organization A cannot access Organization B records.
* **Documentation Requirements**: Tenant isolation design architecture docs and user role permissions matrix.

## Phase 3: Meta WhatsApp Cloud API Integration
* **Goal**: Implement low-level Webhook listener and client integrations for official Meta APIs.
* **Features**: Meta signature validation, raw payload logging, and webhook event dispatch system.
* **Development Tasks**:
  1. Create `/api/webhooks/whatsapp` endpoint in NestJS.
  2. Implement SHA256 X-Hub-Signature validation.
  3. Establish background worker job queues for inbound WhatsApp messages using BullMQ.
  4. Write Meta API Client wrapper supporting token rotation and rate limit handling.
* **Testing Requirements**:
  - Mock incoming Meta payloads to verify webhook signature rejection and approval.
  - Load test webhook endpoint using mock request scripts.
* **Documentation Requirements**: Webhook verification steps, sample payload shapes, and API client configuration guide.

## Phase 4: Contacts
* **Goal**: Create the foundation for customer management and CRM utilities.
* **Features**: Custom attribute builder, tag registry, contact detail pane, and CSV import/export.
* **Development Tasks**:
  1. Define database schemas for `Contact`, `ContactAttribute`, and `Tag`.
  2. Implement contact CRUD routes in the NestJS API.
  3. Implement background job for parsing contact lists from uploaded CSV files.
  4. Build Contacts list page and attribute manager screen in the frontend.
* **Testing Requirements**:
  - Test CSV parser against malformed records and duplicate phone numbers.
  - Validate PostgreSQL indices on phone number and tenant ID queries.
* **Documentation Requirements**: Data dictionary for Contact models and instructions for importing contact databases.

## Phase 5: Conversations and Shared Inbox
* **Goal**: Deliver a real-time collaborative workspace for messaging teams.
* **Features**: Live-updating message threads, WebSocket gateways, internal notes, and agent assignments.
* **Development Tasks**:
  1. Define schemas for `Conversation` and `Message`.
  2. Build NestJS Socket.IO gateway with authentication.
  3. Implement agent assigning controller and internal note toggling.
  4. Build the core multi-pane Shared Inbox interface in React.
* **Testing Requirements**:
  - WebSocket connection persistence and reconnection tests.
  - Concurrent connection mock checking real-time message updates under high volume.
* **Documentation Requirements**: WebSocket protocol payload format and agent workflow handbook.

## Phase 6: Templates
* **Goal**: Provide administrative tools to design and sync WhatsApp templates.
* **Features**: Template creation form, validation check, Meta API Sync service.
* **Development Tasks**:
  1. Database model for `MessageTemplate`.
  2. Integration with Meta's Template API to fetch, edit, and submit templates.
  3. Build UI editor for templates supporting variable placeholders (e.g., `{{1}}`).
* **Testing Requirements**:
  - Verify message variables render correctly.
  - Mock API failures from Meta to verify graceful sync fallbacks.
* **Documentation Requirements**: Guidelines for template approval policies set by Meta.

## Phase 7: Broadcasts and Campaigns
* **Goal**: Support high-volume, compliant outbound messaging.
* **Features**: Campaign scheduler, target group selection, speed throttle controls, and campaign stats.
* **Development Tasks**:
  1. Database models for `Campaign` and `CampaignRecipient`.
  2. Build BullMQ batch-sending workers to process template dispatches.
  3. Implement rate-limiting logic checking Meta's phone tier rules.
  4. Front-end campaign composer, scheduling settings, and statistics graphs.
* **Testing Requirements**:
  - Verify broadcast workers handle thousands of recipient jobs without database bottlenecks.
  - Test queue pausing, stopping, and resumption features.
* **Documentation Requirements**: Campaign best practices guide and worker scale limits guidelines.

## Phase 8: CRM
* **Goal**: Structure sales stages and deal flows directly within the chat platform.
* **Features**: Pipeline boards, lead stages, deal valuation, and deal timelines.
* **Development Tasks**:
  1. Database schema for `Pipeline`, `Stage`, and `Deal`.
  2. API endpoints for managing Kanban boards and deal movements.
  3. Build a visual drag-and-drop Kanban view in Next.js.
  4. Connect deal card timeline to the corresponding WhatsApp conversation thread.
* **Testing Requirements**:
  - Drag-and-drop event validation tests.
  - Verify permission boundaries (agents can view only assigned deal boards).
* **Documentation Requirements**: Guide for configuring pipeline stages and mapping tags to lead states.

## Phase 9: Automation Engine
* **Goal**: Enable conditional, rule-based message handling.
* **Features**: Automated triggers, keyword actions, time-delayed triggers, and routing rules.
* **Development Tasks**:
  1. Database models for `AutomationRule`, `Trigger`, and `Action`.
  2. Build backend rule-execution parser evaluating payload contexts against criteria.
  3. Implement webhook action trigger (sending outgoing payloads from rules).
* **Testing Requirements**:
  - Unit tests verifying nested logic evaluation (e.g., AND/OR rules).
  - Test infinite-loop prevention rules to block bots from talking to other bots.
* **Documentation Requirements**: Automation recipe book showing examples of auto-responders.

## Phase 10: Visual Workflow Builder
* **Goal**: Provide a user-friendly drag-and-drop visual canvas for automation mapping.
* **Features**: Graph node canvas, connector logic, runtime mapping interpreter, and step debugger.
* **Development Tasks**:
  1. Integrate React Flow into `apps/web`.
  2. Construct nodes: Message node, Decision node, Wait node, API fetch node, Agent Route node.
  3. Design JSON schema validator for flowchart graphs.
  4. Implement workflow interpreter on the backend.
* **Testing Requirements**:
  - UI canvas state updates tests.
  - Verify draft vs. published state serialization/deserialization.
* **Documentation Requirements**: Workflow builder design manual with detailed node reference sheets.

## Phase 11: AI Features
* **Goal**: Layer smart assistance over conversation threads.
* **Features**: Smart drafting suggestions, context summarization, and AI chatbot agents.
* **Development Tasks**:
  1. Integration with LLM APIs (e.g. Gemini, OpenAI) using LangChain or SDKs.
  2. Build chat history summarizer worker.
  3. Implement retrieval-augmented generation (RAG) using organization knowledge documents.
* **Testing Requirements**:
  - Test latency of streamable AI generation.
  - Prompt injection screening and response safety test scenarios.
* **Documentation Requirements**: Setup instructions for API keys and training custom AI knowledge contexts.

## Phase 12: Agents and Team Management
* **Goal**: Control access privileges and track agent productivity metrics.
* **Features**: Role Management, assignment logic rules, shifting hours, and agent performance cards.
* **Development Tasks**:
  1. Detail permission gate middleware in NestJS.
  2. Build workspace invite workflows for teammates.
  3. Implement shifting schedules and status hooks in the database.
* **Testing Requirements**:
  - Test access tokens permissions across REST and socket gateways.
  - Test invitation email link validation and expiry rules.
* **Documentation Requirements**: IAM (Identity and Access Management) definitions matrix.

## Phase 13: Analytics
* **Goal**: Offer reports regarding chat activity, campaigns, and team response speeds.
* **Features**: Customizable chart widgets, daily statistics aggregator, download exports.
* **Development Tasks**:
  1. Create aggregation queries in PostgreSQL for message counts and agent actions.
  2. Build analytics caching layer in Redis to prevent heavy DB hits.
  3. Set up frontend charts using Recharts or Chart.js.
* **Testing Requirements**:
  - Verify calculations for Average First Response Time (FRT) and Resolution Time.
  - Index performance testing on high-volume tables (millions of records).
* **Documentation Requirements**: Definition sheet explaining how each analytical metric is calculated.

## Phase 14: Integrations
* **Goal**: Sync user data across third-party e-commerce and CRM tools.
* **Features**: Shopify, HubSpot, and Google Sheets sync hooks.
* **Development Tasks**:
  1. Build oauth callback routes for integrations.
  2. Create Shopify webhook handler (sync orders to WhatsApp contact timelines).
  3. Implement background synchronization workers for HubSpot contact syncs.
* **Testing Requirements**:
  - End-to-end sandbox testing with mock Shopify developer stores.
  - Rate-limit handling and exponential backoff retry test scenarios.
* **Documentation Requirements**: Integration guides for merchants detailing required scopes.

## Phase 15: Developer API
* **Goal**: Open the platform API for third-party custom expansions.
* **Features**: Developer API Keys, rate-limit middleware, API logging, interactive docs.
* **Development Tasks**:
  1. Build API key management system (creation, scoping, hashing, rotation).
  2. Integrate NestJS Throttler for tenant API rate limiting.
  3. Generate Swagger / OpenAPI specification docs.
* **Testing Requirements**:
  - Verify rate limiter triggers HTTP 429 when limits are breached.
  - Check validation schemas for invalid request payloads.
* **Documentation Requirements**: Complete Developer API Reference guide.

## Phase 16: Billing
* **Goal**: Manage revenue streams, usage tracking, and automated renewals.
* **Features**: Tiered plans, Stripe integration, transaction history, conversation credit audits.
* **Development Tasks**:
  1. Database model for `Plan`, `Subscription`, and `UsageLog`.
  2. Integrate Stripe billing webhook handles.
  3. Build Stripe Checkout links dashboard.
* **Testing Requirements**:
  - Run Stripe mock tests for subscription updates, payments, and cancellations.
  - Verify credit ledger decrements correctly for sent messages.
* **Documentation Requirements**: Billing terms and conversation billing calculation details.

## Phase 17: Security and Reliability
* **Goal**: Audit, harden, and optimize infrastructure against threats.
* **Features**: Audit logs, security headers, helmet, two-factor auth (2FA), database backups.
* **Development Tasks**:
  1. Implement NestJS security middleware (Helmet, CORS, CSRF tokens).
  2. Add audit logging service capturing critical mutations.
  3. Setup Automated database backups script (e.g. WAL-G or pg_dump to S3).
* **Testing Requirements**:
  - Run OWASP vulnerability scans against endpoints.
  - Run manual database restoration verification tests.
* **Documentation Requirements**: Security response procedure and backup recovery validation checks.

## Phase 18: Testing
* **Goal**: Validate stability, safety, and scalability.
* **Features**: E2E test suites, load test runners, error logging.
* **Development Tasks**:
  1. Write E2E test suites using Playwright for core user journeys (signup -> connect -> inbox).
  2. Configure load-test scripts with K6 targeting API routes.
  3. Setup error logging hooks (Sentry / Datadog).
* **Testing Requirements**:
  - Achieve minimum 80% coverage on backend core modules.
* **Documentation Requirements**: Test strategy document and pipeline execution instructions.

## Phase 19: Deployment
* **Goal**: Setup automated infrastructure build-and-run pathways.
* **Features**: CI/CD Pipelines, container image builds, orchestration files.
* **Development Tasks**:
  1. Configure GitHub Actions workflows for lint, test, and docker push.
  2. Build production-optimized multi-stage Dockerfiles.
  3. Write Kubernetes manifests or AWS ECS task definitions.
* **Testing Requirements**:
  - Test pipeline builds from mock pull requests.
  - Verify health-check endpoints in staging environments.
* **Documentation Requirements**: Deployment steps handbook and infrastructure setup overview.

## Phase 20: Production Readiness
* **Goal**: Launch live operational environment, configure logs, verify compliance.
* **Features**: System alerts, log aggregator dashboards, SLAs.
* **Development Tasks**:
  1. Configure production monitoring metrics (Prometheus & Grafana).
  2. Setup Slack/Email alert rules for 5xx errors or queue backups.
  3. Perform final verification of logical tenant boundary walls.
* **Testing Requirements**:
  - Verify that system alerts fire when staging servers are intentionally shut down.
* **Documentation Requirements**: Production launch checklist and runbooks for incident responders.
