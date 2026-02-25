# AI Agents From Scratch — Tutorial Site

A Next.js site that presents the [AI Agents From Scratch](https://github.com/pguso/ai-agents-from-scratch) learning path in a web format, similar to [agentsfromscratch.com](https://agentsfromscratch.com/).

## Run locally

From this directory (`site/`):

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Configure GitHub repo URL

By default the site links to [github.com/ali-0407/ai-agents-build](https://github.com/ali-0407/ai-agents-build). To point to a different repo (e.g. your fork), set:

```bash
# .env.local
NEXT_PUBLIC_REPO_URL=https://github.com/YOUR_ORG/ai-agents-from-scratch
```

## Structure

- `app/page.js` — Landing page (hero, learning path, prerequisites, CTA)
- `app/data/learning-path.js` — Learning path steps and repo URLs
- Styling via Tailwind CSS

All “Start with Lesson 1” and step links open the corresponding GitHub tree (e.g. `examples/01_intro`). The actual code and docs stay in the main repo; this site is a friendly entry point.
