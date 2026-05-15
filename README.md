# Research Knowledge Platform

Headless CMS-driven research publishing platform built with React, Vite, WordPress, and Advanced Custom Fields (ACF).

The repository is structured around decoupled frontend rendering, CMS-driven content modeling, REST API consumption, role-isolated editorial workflows, and production-oriented deployment separation.

---

# Repository Topology

```text
research-knowledge-platform/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── routes/
│   ├── styles/
│   ├── assets/
│   └── utils/
│
├── public/
│
├── wordpress/
│   ├── custom-admin-plugin/
│   ├── acf-configuration/
│   └── cms-configuration/
│
├── docs/
│   ├── screenshots/
│   ├── architecture/
│   └── editorial-flow/
│
├── .env
├── package.json
└── README.md
```

---

# Runtime Architecture

```text
React Frontend Runtime
        ↓
Frontend Service Layer
        ↓
WordPress REST API
        ↓
ACF Structured Content
        ↓
WordPress CMS Runtime
```

---

# System Boundaries

| Layer | Responsibility |
|---|---|
| React Frontend | Rendering, routing, client-side interaction |
| Frontend Service Layer | API consumption and response normalization |
| WordPress CMS | Editorial content management |
| ACF Layer | Structured field modeling |
| REST API Layer | Content transport between CMS and frontend |
| Editorial Dashboard | Role-isolated content operations |

---

# Core Stack

| Layer | Technology |
|---|---|
| Frontend Runtime | React.js |
| Build Tooling | Vite |
| Routing | React Router |
| CMS | WordPress |
| Structured Content | Advanced Custom Fields (ACF) |
| Content Modeling | CPT UI |
| API Layer | WordPress REST API |
| Styling | Custom CSS |
| Environment Management | dotenv |
| Deployment Target | Netlify-compatible frontend architecture |

---

# Frontend Runtime

## Frontend Responsibilities

| Area | Responsibility |
|---|---|
| Rendering Pipeline | CMS-driven page rendering |
| Route Resolution | Client-side route handling |
| API Consumption | WordPress REST communication |
| Content Hydration | Dynamic research content rendering |
| State Ownership | Frontend interaction state |
| UI Composition | Component-driven layout structure |

---

## Frontend Structure

```text
src/
├── components/
├── pages/
├── services/
├── routes/
├── styles/
├── assets/
└── utils/
```

---

## Rendering Strategy

| Strategy | Implementation |
|---|---|
| Content Source | WordPress REST API |
| Rendering Model | Client-side rendering |
| Dynamic Pages | CMS-driven route rendering |
| Media Delivery | WordPress media endpoints |
| API Configuration | Environment-driven |

---

# CMS Runtime

## CMS Responsibilities

| Area | Responsibility |
|---|---|
| Research Publishing | Editorial content lifecycle |
| Content Modeling | Structured research fields |
| Editorial Operations | Admin/editor workflows |
| Media Management | Research asset handling |
| API Exposure | REST-driven frontend delivery |
| Role Isolation | Editorial permission separation |

---

## ACF Content Modeling

### Structured Fields

```text
- research_category
- reading_time
- featured_statistic
- featured_image
- integrity_status
- downloadable_assets
```

---

## Editorial Isolation Strategy

| Capability | Admin | Editor |
|---|---|---|
| Research CRUD Operations | ✓ | ✓ |
| Media Operations | ✓ | ✓ |
| CMS Dashboard Access | ✓ | ✓ |
| Plugin Access | ✓ | ✗ |
| ACF Configuration | ✓ | ✗ |
| CPT Management | ✓ | ✗ |
| System Configuration | ✓ | ✗ |
| User Management | ✓ | ✗ |

---

# API Consumption Layer

## Request Lifecycle

```text
Frontend Route Request
        ↓
Service Layer Request
        ↓
REST API Consumption
        ↓
Structured CMS Payload
        ↓
Frontend Rendering Pipeline
```

---

## API Responsibilities

| Area | Responsibility |
|---|---|
| Content Retrieval | Fetch research content |
| Media Retrieval | Resolve CMS media assets |
| Structured Fields | Retrieve normalized ACF payloads |
| Dynamic Rendering | Populate research detail pages |
| Route Hydration | Support CMS-driven frontend routes |

---

# Editorial Workflow Runtime

## Editorial Flow

```text
Editor Authentication
        ↓
Research CMS Dashboard
        ↓
Structured Content Input
        ↓
ACF Field Population
        ↓
Content Publication
        ↓
REST API Exposure
        ↓
Frontend Revalidation
```

---

## Dashboard Architecture

| Layer | Responsibility |
|---|---|
| Custom CMS Dashboard | Simplified editorial interaction |
| Admin Workspace | Technical CMS operations |
| Editor Workspace | Content-focused publishing operations |
| Role Isolation | Permission boundary enforcement |
| Navigation Layer | Reduced CMS complexity |

---

# Runtime Ownership Model

| Runtime | Ownership |
|---|---|
| React Frontend | Rendering lifecycle |
| WordPress CMS | Editorial lifecycle |
| REST API Layer | Content transport |
| ACF Layer | Structured content contracts |
| Frontend Services | Payload normalization |
| Frontend Routes | Dynamic route resolution |
| Editorial Dashboard | CMS interaction boundary |

---

# Rendering Boundaries

| Boundary | Responsibility |
|---|---|
| CMS | Content creation and persistence |
| Frontend | Presentation and rendering |
| REST Layer | Content serialization |
| Service Layer | Response transformation |
| Route Layer | URL-to-content resolution |

---

# Frontend State Ownership

| State Domain | Owner |
|---|---|
| Route State | React Router |
| CMS Payload State | Frontend service layer |
| UI Interaction State | React component tree |
| Editorial State | WordPress CMS |
| Structured Metadata | ACF field groups |

---

# Request Lifecycle

## Research Detail Request Flow

```text
Frontend Route Resolution
        ↓
Slug-based Route Match
        ↓
Service Layer Request
        ↓
REST API Consumption
        ↓
ACF Payload Retrieval
        ↓
Payload Normalization
        ↓
Frontend Rendering Contract
        ↓
Dynamic Page Hydration
```

---

# Payload Normalization Strategy

The frontend does not directly bind raw WordPress payloads to rendering components.

All CMS responses pass through a normalization layer before entering the rendering pipeline.

## Normalization Responsibilities

```text
- resolve ACF field access
- flatten nested CMS structures
- normalize media URLs
- isolate rendering contracts
- reduce frontend coupling to CMS payload shape
```

---

# CMS Abstraction Strategy

The frontend is intentionally isolated from direct WordPress administration logic.

## Separation Model

| Layer | Isolation Purpose |
|---|---|
| WordPress Admin | Editorial operations only |
| Frontend Runtime | Presentation runtime only |
| ACF Structures | Content schema abstraction |
| Service Layer | CMS response isolation |
| Route Layer | Rendering boundary separation |

---

# Route Hydration Strategy

| Route Type | Hydration Source |
|---|---|
| Static Pages | Frontend-defined |
| Research Detail Pages | CMS-driven |
| Media Assets | WordPress media endpoints |
| Editorial Metadata | ACF payloads |

---

# Deployment Runtime Separation

## Development Runtime

```text
React Dev Server
        ↓
Environment Variable API Resolution
        ↓
Local WordPress Runtime
```

---

## Production Runtime

```text
Netlify Frontend Deployment
        ↓
Production API Resolution
        ↓
Headless WordPress CMS
```

---

# Security Boundary Model

| Boundary | Protection Strategy |
|---|---|
| Editorial Access | Role isolation |
| CMS Exposure | REST surface reduction |
| WordPress Runtime | XML-RPC removal |
| Public Metadata | Version hiding |
| Upload Surface | MIME restrictions |
| Browser Security | Response headers |

---

# Engineering Constraints

## Frontend Constraints

```text
- frontend never owns editorial persistence
- frontend never mutates CMS schema
- rendering contracts remain CMS-agnostic
- environment configuration remains runtime-driven
```

---

## CMS Constraints

```text
- CMS never owns frontend rendering
- CMS only exposes structured content
- editorial workflows remain role-isolated
- technical configuration remains admin-scoped
```

---

# Build Verification

## Production Build Validation

```bash
npm run build
```

## Verified Areas

```text
- frontend bundle generation
- route compilation
- asset optimization
- production runtime compatibility
- environment resolution
```

---

# Security Surface Reduction

## Implemented Hardening

| Area | Implementation |
|---|---|
| WordPress Version Exposure | Removed |
| Asset Version Leakage | Disabled |
| XML-RPC | Disabled |
| REST User Enumeration | Restricted |
| Security Headers | Added |
| Login Error Exposure | Reduced |
| Upload MIME Restrictions | Enabled |
| Admin File Editing | Disabled |
| Role Separation | Enforced |

---

## Security Headers

```text
X-Content-Type-Options
X-Frame-Options
Referrer-Policy
```

---

# GDPR & Consent Layer

| Area | Implementation |
|---|---|
| Cookie Consent Flow | Custom frontend implementation |
| Consent State | Frontend-managed |
| Editorial Transparency | Integrated into UI flow |
| Third-Party Overlay Dependency | Avoided |

---

# Performance Strategy

| Area | Implementation |
|---|---|
| Image Loading | Lazy loading |
| Frontend Build | Optimized Vite production build |
| Rendering Structure | Component modularization |
| Environment Separation | API environment configuration |
| CMS Decoupling | Reduced frontend dependency surface |

---

# Deployment Topology

```text
React Frontend
        ↓
Netlify Deployment Target
        ↓
Environment-based API Configuration
        ↓
WordPress CMS Runtime
```

---

# Environment Configuration

## Frontend Environment Variables

```env
VITE_WORDPRESS_API_URL=http://localhost:8080/wp-json/wp/v2/research
```

---

# Development Workflow

```text
CMS Content Modeling
        ↓
Frontend Route Composition
        ↓
REST API Consumption
        ↓
Dynamic Rendering Validation
        ↓
Production Build Verification
```

---

# Build Strategy

## Frontend Build

```bash
npm run build
```

## Development Runtime

```bash
npm run dev
```

---

# Setup

## Frontend Installation

```bash
npm install
npm run dev
```

---

## WordPress Runtime

```text
Local Docker-based WordPress runtime
```

---

## Required CMS Components

```text
- WordPress
- Advanced Custom Fields (ACF)
- CPT UI
- Custom Editorial Dashboard Plugin
```

---

# Screenshots

```text
docs/screenshots/
```

---

# License

MIT