---
title: "Understanding High-Performance API Layouts"
description: "Best practices for designing fast, reliable, and secure RESTful APIs and microservices."
pubDatetime: 2026-07-02T10:00:00Z
ogImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80"
tags:
  - backend
  - api
  - nodejs
---

## Table of contents

## Introduction

Designing high-performance APIs requires deep understanding of **network layers**, database pooling, and serialization formats. This guide covers the most impactful patterns.

> APIs are the backbone of modern software. A slow API kills user experience faster than a bad UI.

## Key Considerations

Here's a quick overview of the areas we'll cover:

| Concern | Solution | Impact |
|---------|----------|--------|
| Caching | Redis / CDN | Very High |
| DB Queries | Indexes + Batching | High |
| Payload | Gzip / Brotli | Medium |
| Auth | JWT + Rate limiting | High |
| Protocol | HTTP/2, gRPC | Medium |

## Caching Strategy

Use `Cache-Control` headers and a **Redis** layer for frequently-accessed endpoints.

```ts
// src/middleware/cache.ts
import { createClient } from 'redis';

const redis = createClient();

export async function cacheMiddleware(req, res, next) {
  const key = `cache:${req.url}`;
  const cached = await redis.get(key);

  if (cached) {
    return res.json(JSON.parse(cached));
  }

  res.sendResponse = res.json.bind(res);
  res.json = async (data) => {
    await redis.setEx(key, 300, JSON.stringify(data)); // TTL 5 min
    res.sendResponse(data);
  };

  next();
}
```

> [!NOTE]
> Always set an appropriate TTL. Stale caches can cause data inconsistencies.

> [!WARNING]
> Never cache responses containing user-specific private data.

## Database Optimization

### Avoiding N+1 Queries

The classic N+1 problem: fetching users then querying orders **for each user** separately.

```sql
-- ❌ Bad: N+1 pattern
SELECT * FROM users;
-- Then for each user:
SELECT * FROM orders WHERE user_id = ?;

-- ✅ Good: single JOIN
SELECT u.*, o.*
FROM users u
LEFT JOIN orders o ON o.user_id = u.id;
```

### Indexing

Always index columns used in `WHERE`, `JOIN`, and `ORDER BY`:

```sql
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_created_at ON orders(created_at DESC);
```

## Payload Compression

Enable `compression` in your Express server:

```ts
import compression from 'compression';
import express from 'express';

const app = express();
app.use(compression({ level: 6 })); // Gzip level 6
```

> [!TIP]
> For APIs serving large JSON payloads, Brotli (`br`) achieves ~20% better compression than Gzip.

## Rate Limiting

Protect your API from abuse using `express-rate-limit`:

```ts
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,                  // 100 requests per window
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/', limiter);
```

## Checklist

- [x] Enable response caching (Redis)
- [x] Add database indexes on hot columns
- [x] Enable Gzip/Brotli compression
- [x] Add rate limiting middleware
- [ ] Migrate to HTTP/2
- [ ] Benchmark with k6 or Artillery

## Conclusion

Performance is a **feature**, not an afterthought. Start with caching and proper indexing — these give the biggest wins with the least effort.
