# NexChat: Professional WhatsApp Automation SaaS Platform

NexChat is an enterprise-ready, developer-friendly WhatsApp automation and conversational CRM platform built using the official Meta WhatsApp Cloud API. Designed with a modular monorepo architecture, NexChat enables businesses to scale their messaging campaigns, collaborate through a unified team inbox, build complex chat automation flows, and integrate customer data securely.

> **Development Status**: 🚧 In Development. NexChat is currently in active planning and foundational scaffolding. It is not yet ready for production deployment.

---

## 🌌 Project Vision

Our vision is to provide a scalable, modern, and highly customizable communication hub that enables organizations to manage WhatsApp operations with high throughput and strict data isolation. NexChat aims to improve on traditional WhatsApp business tools by offering:
- **Intelligent Orchestration**: High-throughput queues managed via Redis and BullMQ for reliable campaign broadcasts.
- **Deep Tenant Isolation**: Strict multi-tenant logical routing and database scoping.
- **Developer-First Tools**: Direct API endpoints, webhooks, and flexible integration systems to prevent platform lock-in.

---

## 🛠️ Core Features

- **Shared Team Inbox**: Real-time collaborative workspace for sales and support agents with chat assignments and internal staff notes.
- **WhatsApp Templates Sync**: Seamless creation, tracking, and synchronization of Meta-approved utility, marketing, and authentication message templates.
- **Audience & Segmentation**: Filter contacts by custom metadata attributes, tags, and campaign engagement history to build targeted audiences.
- **High-Throughput Broadcasts**: Batch campaign delivery engines designed with rate-limiting protection to match Meta's account tiers.
- **Automation Rules & Flow Builder**: Simple triggers and keyword actions, scaling to a visual drag-and-drop workflow node editor.
- **AI Copilot Integration**: Intelligent drafting suggestions, conversation context summarization, and automated FAQ responses.
- **CRM Pipeline Integration**: Sales lifecycle and Kanban boards mapped directly to active chats.

---

## 🏗️ Architecture Overview

NexChat is built as a modular monorepo. It splits client views, core web APIs, and high-frequency workers into isolated blocks:

1. **Next.js Frontend**: A modern single-page-app experience for workspace admins and support agents.
2. **NestJS Backend**: A robust REST API and WebSocket gateway that validates webhook payloads and controls DB operations.
3. **BullMQ Background Workers**: Distributed processing workers utilizing Redis to handle campaign blasts, message parsing, and time-delayed triggers.
4. **PostgreSQL Database**: Isolated transactional storage managed via Prisma ORM.

For a deeper dive into data flows and database layouts, please refer to our [PROJECT_OVERVIEW.md](file:///c:/Users/vinod/OneDrive/Desktop/Projects/NexChat/docs/PROJECT_OVERVIEW.md).

---

## 💻 Technology Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: NestJS, TypeScript, WebSockets (Socket.IO)
- **Database**: PostgreSQL, Prisma ORM
- **Task Queues & Caching**: Redis, BullMQ
- **Integrations**: Meta WhatsApp Cloud API

---

## 📂 Repository Structure

```
NexChat/
├── apps/
│   ├── web/               # Next.js frontend application (Planned)
│   └── api/               # NestJS backend application (Planned)
├── packages/
│   └── shared/            # Shared types and utility logic (Planned)
├── docs/
│   ├── PROJECT_OVERVIEW.md # Detailed system design and design models
│   └── ROADMAP.md         # Phased implementation schedule (21 phases)
├── .gitignore             # Comprehensive file exclusion rules
├── README.md              # Main project introduction
└── package.json           # Monorepo workspaces definition
```

---

## 📖 Documentation Links

- **System Design & Specs**: [PROJECT_OVERVIEW.md](file:///c:/Users/vinod/OneDrive/Desktop/Projects/NexChat/docs/PROJECT_OVERVIEW.md)
- **Implementation Steps**: [ROADMAP.md](file:///c:/Users/vinod/OneDrive/Desktop/Projects/NexChat/docs/ROADMAP.md)

---

## 🔄 Git Workflow & Commit Rules

To maintain high code quality across our team, we follow a strict development branch cycle:
1. **Branching**: All changes must be developed on separate branches (e.g. `feat/auth-middleware`, `fix/inbox-scrolling`) branched off `main`.
2. **Commit Style**: Commits must adhere to the Conventional Commits framework:
   - `feat(...)`: A new feature
   - `fix(...)`: A bug fix
   - `docs(...)`: Documentation changes
   - `style(...)`: Formatting/styling edits
   - `refactor(...)`: Code changes that neither fix a bug nor add a feature
3. **No Force Pushing**: Force pushes to the `main` branch are strictly prohibited.
4. **Scaffold Rules**: Do not alter `package.json` configurations or import dependencies without prior review.

---

## 🗺️ Future Roadmap

Our implementation is mapped out across 21 phases, starting from foundation scaffolding to visual node builders and production-grade monitoring systems.
For details on Phase goals, features, and testing parameters, consult the [ROADMAP.md](file:///c:/Users/vinod/OneDrive/Desktop/Projects/NexChat/docs/ROADMAP.md).
