# Security Boundaries

## Security Surface Reduction

| Area | Implementation |
|---|---|
| WordPress Version Exposure | Removed |
| Asset Version Leakage | Disabled |
| XML-RPC | Disabled |
| REST User Enumeration | Restricted |
| Upload MIME Restrictions | Enabled |
| Login Error Exposure | Reduced |
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

## Runtime Isolation

| Runtime | Isolation Purpose |
|---|---|
| Frontend Runtime | Presentation-only ownership |
| CMS Runtime | Editorial persistence ownership |
| REST Layer | Serialized content transport |
| Dashboard Runtime | Role-aware CMS operations |

---

## Upload Security

Allowed upload types restricted to:

```text
- jpg
- jpeg
- png
- webp
- pdf
```

---

## Access Boundary Model

| Capability | Admin | Editor |
|---|---|---|
| Technical Configuration | ✓ | ✗ |
| Plugin Management | ✓ | ✗ |
| Editorial Operations | ✓ | ✓ |
| Media Upload | ✓ | ✓ |

---

## Authentication Boundary

```text
Authentication
        ↓
Role Resolution
        ↓
Dashboard Access Isolation
        ↓
Capability-aware Navigation
```