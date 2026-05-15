# System Architecture

```text
React + Vite Frontend
        ↓
Service Layer
        ↓
WordPress REST API
        ↓
WordPress CMS
        ↓
ACF Structured Content
```

## Runtime Boundaries

| Runtime | Responsibility |
|---|---|
| React | Rendering, routing, UI composition |
| Service Layer | API requests and payload normalization |
| WordPress | Content lifecycle and editorial workflows |
| ACF | Structured metadata modeling |
| Custom Admin Plugin | Role-based CMS dashboard and editorial UX |

## Content Flow

```text
Editor creates Research Topic
        ↓
ACF fields structure metadata
        ↓
WordPress exposes content through REST API
        ↓
React service layer normalizes response
        ↓
Frontend renders research cards and detail pages
```

## Role Boundary

| Role | Access |
|---|---|
| Admin | CMS content + technical tools |
| Research Editor | Content creation, media, guide |