# Deployment Topology

## Development Runtime

```text
React Dev Server
        ↓
Environment Variable Resolution
        ↓
Local WordPress Runtime
        ↓
REST API Communication
```

---

## Production Runtime

```text
Netlify Frontend Deployment
        ↓
Environment-based API Resolution
        ↓
Headless WordPress CMS
        ↓
Structured REST API Delivery
```

---

## Runtime Separation

| Runtime | Responsibility |
|---|---|
| Frontend Runtime | Rendering and route handling |
| CMS Runtime | Editorial workflows |
| REST Layer | Content serialization |
| Service Layer | Payload normalization |

---

## Environment Strategy

### Frontend Environment Variable

```env
VITE_WORDPRESS_API_URL=http://localhost:8080/wp-json/wp/v2/research
```

---

## Production Considerations

| Area | Strategy |
|---|---|
| CMS Decoupling | Frontend isolated from WordPress rendering |
| Deployment Separation | Frontend and CMS deployed independently |
| API Configuration | Environment-driven |
| Rendering Ownership | Frontend-controlled |
| Editorial Ownership | CMS-controlled |

---

## Build Verification

### Production Build

```bash
npm run build
```

### Verified Areas

```text
- frontend bundle generation
- asset optimization
- route compilation
- environment resolution
- production runtime compatibility
```