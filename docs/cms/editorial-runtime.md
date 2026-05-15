# Editorial Runtime

## Editorial Workflow

```text
Authentication
        ↓
Custom CMS Dashboard
        ↓
Research Creation
        ↓
ACF Field Population
        ↓
Content Publication
        ↓
REST API Exposure
        ↓
Frontend Rendering
```

---

## CMS Runtime Responsibilities

| Runtime Area | Responsibility |
|---|---|
| WordPress CMS | Editorial lifecycle management |
| ACF | Structured metadata contracts |
| Custom Dashboard Plugin | Editorial UX abstraction |
| REST API | Frontend content transport |
| Role Isolation | Permission boundary enforcement |

---

## Editorial Isolation Model

| Capability | Admin | Editor |
|---|---|---|
| Research CRUD | ✓ | ✓ |
| Media Upload | ✓ | ✓ |
| CMS Dashboard | ✓ | ✓ |
| Plugin Management | ✓ | ✗ |
| ACF Configuration | ✓ | ✗ |
| System Settings | ✓ | ✗ |

---

## Dashboard Architecture

```text
Custom CMS Dashboard
        ↓
Role-aware Navigation
        ↓
Editorial Workspace
        ↓
Structured Publishing Flow
```

---

## CMS Abstraction Strategy

The frontend runtime is intentionally isolated from direct WordPress administration logic.

The CMS layer owns:

- editorial persistence
- content modeling
- structured metadata
- publishing workflows

The frontend runtime owns:

- rendering
- route composition
- UI interaction
- presentation lifecycle