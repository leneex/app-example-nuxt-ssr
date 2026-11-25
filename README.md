# Nuxt SSR

Example [Nuxt](https://nuxt.com/) app with server-side rendering (SSR). Nuxt is a Vue framework for building full-stack web applications.

## Deploy settings

| Field | Value |
| --- | --- |
| Build | Railpack |
| Project directory | `/` |
| Install command | leave empty |
| Build command | leave empty |
| Start command | leave empty |
| Application port | `3000` |
| Health check path | `/` |

## <a name="dev"></a>Run locally

```bash
# install dependencies
npm install

# run in development mode with watch
npm run dev

# build and run for production
npm run build
node .output/server/index.mjs
```

Requires Node.js 24.15 or later (in the 22 branch — 22.22.3 or later).
