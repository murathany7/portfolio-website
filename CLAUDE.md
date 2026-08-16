# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run lint` — run ESLint (next/core-web-vitals)

There is no test suite.

## What this is

A single-page personal portfolio site built on Next.js 16 App Router with React 19, TypeScript, Tailwind CSS, and Framer Motion. The one route (`app/page.tsx`) stacks section components (`Intro`, `About`, `Projects`, `Skills`, `Experience`, `Contact`) from `components/`. The `@/*` import alias maps to the repo root.

## Architecture

**Content lives in `lib/data.ts`.** Nav links, experience entries, projects, and skills are all exported from this one file; most content changes happen here, not in components. `lib/types.ts` derives the `SectionName` type from the `links` array, so section names are type-checked everywhere they're used.

**Active-section nav highlighting** is the main cross-file mechanism:
- `context/active-section-context.tsx` holds `activeSection` plus `timeOfLastClick`.
- `lib/hooks.ts` exports `useSectionInView(sectionName, threshold)`, which uses `react-intersection-observer` to set the active section when a section scrolls into view — suppressed for 1 second after a nav click (via `timeOfLastClick`) so the observer doesn't fight the scroll animation.
- Each section component calls `useSectionInView` with its own name and sets an `id` matching its hash in `links`. Adding a section means: add to `links` in `lib/data.ts`, create the component with matching `id`/hook call, and render it in `app/page.tsx`.

**Theming:** `context/theme-context.tsx` toggles the `dark` class on `<html>` and persists the choice to `localStorage` (falling back to `prefers-color-scheme`). Tailwind is configured with `darkMode: "class"`, so all dark styling uses `dark:` variants.

**Contact form** uses a Next.js server action: `actions/sendEmail.ts` (`"use server"`) sends via Resend with the React Email template in `email/contact-form-email.tsx`. Requires `RESEND_API_KEY` in `.env.local`; the `to`/`from` addresses are hardcoded in the action.

**Deployment:** hosted on Netlify at murathanyildirim.com, auto-deploys on push to master. `images.unoptimized` is set in `next.config.js` because Netlify's image-optimization function was returning 500s; images are served as plain static files.

Nearly every component is a client component (`"use client"`) because of Framer Motion animations and the context hooks; `app/page.tsx` and `app/layout.tsx` are server components. Google Analytics is inlined in `app/layout.tsx`.
