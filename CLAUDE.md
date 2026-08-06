# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16.3.0 project bootstrapped with `create-next-app`, using the App Router, TypeScript, and Tailwind CSS for styling.

## Development Commands

- **Development server**: `npm run dev` (starts at http://localhost:3000)
- **Production build**: `npm run build`
- **Production start**: `npm run start`
- **Linting**: `npm run lint` (uses ESLint with Next.js and TypeScript configs)

## Project Structure

- `app/` - App Router directory
  - `layout.tsx` - Root layout with Geist fonts and global CSS
  - `page.tsx` - Home page component
  - `globals.css` - Global CSS including Tailwind directives
- `public/` - Static assets (SVG icons, favicon)
- Configuration files:
  - `next.config.ts` - Next.js configuration (currently empty/default)
  - `tsconfig.json` - TypeScript configuration
  - `eslint.config.mjs` - ESLint configuration (Next.js + TypeScript)
  - `postcss.config.mjs` - PostCSS configuration (Tailwind CSS)
  - `package.json` - Dependencies and scripts

## Key Technologies

- **Framework**: Next.js 16.3.0 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans and Geist Mono (via next/font)
- **Linting**: ESLint with Next.js and TypeScript presets

## Development Guidelines

1. **Styling**: Uses Tailwind CSS utilities. Edit `app/globals.css` for global styles or add utility classes directly in components.
2. **Fonts**: The Geist font family is already configured in `app/layout.tsx` using `next/font`.
3. **Components**: Create new components in the `app/` directory following the App Router conventions.
4. **Images**: Place static images in the `public/` directory and reference them with `/image-name.svg`.
5. **Type Safety**: The project uses TypeScript strictly - ensure proper typing for props and state.

## Common Tasks

### Adding a New Page
Create a new file in `app/` directory (e.g., `app/about/page.tsx`) to create a new route.

### Adding Components
Create reusable components in the `app/` directory or consider creating a `components/` directory if the project grows.

### Styling with Tailwind
- Use utility classes directly in JSX
- For custom CSS, edit `app/globals.css`
- Tailwind v4 is configured via PostCSS

### TypeScript
- All files should use `.tsx` extension for React components
- Follow existing type patterns in the codebase
- The project uses strict TypeScript mode

### Linting and Formatting
- Run `npm run lint` to check for linting errors
- ESLint is configured with Next.js and TypeScript recommended rules
- Consider adding Prettier for code formatting if needed

## Important Notes

- This is a standard Next.js App Router setup - refer to [Next.js Documentation](https://nextjs.org/docs) for specific features
- The project uses the new Next.js font optimization system via `next/font`
- Environment variables can be added in `.env.local` following Next.js conventions
- For production deployment, Vercel is recommended (see README for details)

## When in Doubt

- Check the existing files in `app/` for patterns and conventions
- Refer to the official Next.js documentation for App Router features
- Run `npm run dev` frequently to see changes in real-time