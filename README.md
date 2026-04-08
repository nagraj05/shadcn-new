<div align="center">

```
███████╗██╗  ██╗ █████╗ ██████╗  ██████╗███╗   ██╗          ██████╗ ███████╗ ██████╗ ██╗███████╗████████╗██████╗ ██╗   ██╗
██╔════╝██║  ██║██╔══██╗██╔══██╗██╔════╝████╗  ██║          ██╔══██╗██╔════╝██╔════╝ ██║██╔════╝╚══██╔══╝██╔══██╗╚██╗ ██╔╝
███████╗███████║███████║██║  ██║██║     ██╔██╗ ██║          ██████╔╝█████╗  ██║  ███╗██║███████╗   ██║   ██████╔╝ ╚████╔╝ 
╚════██║██╔══██║██╔══██║██║  ██║██║     ██║╚██╗██║          ██╔══██╗██╔══╝  ██║   ██║██║╚════██║   ██║   ██╔══██╗  ╚██╔╝  
███████║██║  ██║██║  ██║██████╔╝╚██████╗██║ ╚████║          ██║  ██║███████╗╚██████╔╝██║███████║   ██║   ██║  ██║   ██║   
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝  ╚═════╝╚═╝  ╚═══╝          ╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝   
```

**A curated directory of 160+ shadcn-compatible component libraries — all in one place.**

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-F59E0B?style=flat-square)](CONTRIBUTING.md)

</div>

---

## ✦ What is shadcn-registry?

Stop hunting across GitHub, npm, and Twitter for shadcn-compatible UI libraries.  
**shadcn-registry** is a living index — a single searchable app where every library has its own dedicated page.

Each library lives at its own route (e.g. `/magicui`, `/aceternity`, `/motion-primitives`).  
Fully integrated libraries show their components. Others show a coming-soon scaffold, ready to be filled in.

---

## ✦ Libraries Indexed

160+ libraries across every category you'd need:

| Category | Libraries |
|---|---|
| 🎬 **Animation** | `animate-ui` · `motion-primitives` · `pacekit` · `react-bits` · `animbits` |
| 📊 **Charts & Data** | `shadcn-dashboard` · `lytenyte` · `gammaui` |
| 🎨 **Icons** | `lucide-animated` · `heroicons-animated` · `svgl` · `icons-animated` |
| 🤖 **AI / Agents** | `assistant-ui` · `agents-ui` · `prompt-kit` · `ai-blocks` · `ai-elements` |
| 🗺️ **Maps** | `shadcn-map` · `shadcnmaps` · `mapcn` |
| 🔐 **Auth** | `auth0` · `clerkcn` |
| ✏️ **Editors** | `shadcn-editor` · `plate` · `prosekit` |
| 💳 **Payments** | `billingsdk` · `paykit-sdk` · `commercn` |

> And many more. Browse them all at [localhost:3000](http://localhost:3000).

---

## ✦ Getting Started

### Prerequisites
- **Node.js** v18+
- npm / yarn / pnpm / bun

### Install & Run

```bash
# Clone the repo
git clone https://github.com/your-username/shadcn-registry.git
cd shadcn-new

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the registry is live.

### Production Build

```bash
npm run build
npm run start
```

---

## ✦ Utility Script

`create_pages.py` scaffolds `page.tsx` files for any new library folders automatically.

```bash
# Scaffold only folders missing a page.tsx
python create_pages.py

# Overwrite all existing page.tsx files (e.g. after a template update)
python create_pages.py --overwrite
```

Safe to re-run at any time — existing files are skipped unless `--overwrite` is passed.

---

## ✦ Adding a New Library

```
1  Create a folder under app/ using the library's slug
        app/your-library-name/

2  Scaffold a Coming Soon page
        python create_pages.py

3  Replace the scaffold with real content when ready
        app/your-library-name/page.tsx

4  Register it in the grid
        Add the slug to SECTIONS in app/page.tsx
```

---

## ✦ Tech Stack

| | |
|---|---|
| **[Next.js 15](https://nextjs.org)** | App Router, file-based routing |
| **[TypeScript](https://typescriptlang.org)** | Full type safety |
| **[Tailwind CSS v4](https://tailwindcss.com)** | Utility-first styling |
| **[shadcn/ui](https://ui.shadcn.com)** | Component primitives |
| **[Lucide React](https://lucide.dev)** | Icon set |
| **[motion/react](https://motion.dev)** | Animations |

---

## ✦ Deployment

Deploy to Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or build and self-host anywhere Node.js runs.

---

## ✦ Contributing

Spotted a missing library? PRs are welcome.

```bash
# 1. Fork the repo
# 2. Add a folder under app/ with the library slug
# 3. Register it in SECTIONS inside app/page.tsx
# 4. Open a PR with a short description of the library
```

Please keep library slugs lowercase and hyphenated (e.g. `my-library-name`).

---

## ✦ License

MIT — free to use, modify, and distribute.

---

<div align="center">

Built for the shadcn ecosystem. Contributions make it better.  
**Star it if it saves you time. ⭐**

</div>
