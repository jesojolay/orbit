# Orbit Project Plan

## Overview
This document outlines the implementation plan for Orbit, a project management app similar to Linear, built with Next.js 16.3.0 (using proxy.ts instead of middleware.ts), TypeScript, Tailwind CSS, Shadcn UI, Supabase, Stripe, Resend, and the AI SDK.

## Milestones

### Milestone 1: Project Setup and Basic Layout
- [ ] Create Next.js App Router structure (`app/` directory with `layout.tsx` and `page.tsx`)
- [ ] Verify and adjust Tailwind CSS configuration
- [ ] Install and configure Shadcn UI components
- [ ] Set up Supabase locally using Docker
- [ ] Initialize database schema: tables for `teams`, `users`, `boards`, `tasks`, `columns`
- [ ] Configure environment variables (`.env.local`) for Supabase, Stripe, Resend, etc.
- [ ] Implement root layout with Geist fonts and global CSS
- [ ] Create a basic home page (`app/page.tsx`) with navigation
- [ ] Configure proxy.ts for API routes (instead of middleware.ts as per Next.js 16.3.0)

### Milestone 2: User Authentication and Onboarding
- [ ] Integrate Supabase Auth (email/password, optional social providers)
- [ ] Create sign-in and sign-up pages (`app/sign-in`, `app/sign-up`)
- [ ] Implement protected routes using Next.js middleware or route guards
- [ ] Design onboarding flow: after sign-up, prompt to create a team (workspace)
- [ ] Team creation form (name, description) and invite members via email
- [ ] Store team and membership data in Supabase
- [ ] Create team dashboard (list of boards, create new board)

### Milestone 3: Workspace and Board Management
- [ ] Board creation form (title, description, default columns: To Do, In Progress, Done)
- [ ] Board listing page within a team
- [ ] Ability to delete/archive boards
- [ ] Board view page (`/teams/:teamId/boards/:boardId`) displaying columns and tasks
- [ ] Create, edit, delete tasks within columns
- [ ] Task properties: title, description, assignee, due date, priority
- [ ] Drag and drop tasks within a column (for reordering) - basic implementation

### Milestone 4: Kanban Board with Drag and Drop
- [ ] Install and integrate a drag-and-drop library (e.g., `@dnd-kit/core` or `react-beautiful-dnd`)
- [ ] Implement drag-and-drop between columns (To Do, In Progress, Done) to update task status
- [ ] Persist drag-and-drop changes to Supabase via API calls (optimistic updates)
- [ ] Handle edge cases: concurrent updates, loading states, error handling
- [ ] Add task details modal (edit task, add comments, attachments)
- [ ] Implement task filtering and search within a board

### Milestone 5: Team and User Management
- [ ] Team settings page (name, description, members list)
- [ ] Invite team members via email (using Resend for email sending)
- [ ] Manage member roles (admin, member) and remove members
- [ ] User profile page (avatar, name, email, notification preferences)
- [ ] Leave team functionality (with appropriate checks for last admin)
- [ ] Activity feed or notifications within the app (optional for MVP)

### Milestone 6: Payments and Subscription (Stripe)
- [ ] Install Stripe SDK and configure webhook endpoint
- [ ] Create pricing page displaying Lite and Pro plans
- [ ] Implement Stripe Checkout for subscription payments
- [ ] Handle webhooks for subscription events (create, update, cancel)
- [ ] Store subscription status in Supabase (linked to team)
- [ ] Enforce feature limits based on plan (e.g., number of boards, members)
- [ ] Customer portal for subscription management

### Milestone 7: Email Notifications (Resend)
- [ ] Install Resend SDK and configure API key
- [ ] Send welcome email upon sign-up
- [ ] Send team invitation emails with magic links or acceptance links
- [ ] Notify users of task assignments, comments, and due dates (optional)
- [ ] Create email templates using React components (if using Resend with React)
- [ ] Handle email delivery errors and retries

### Milestone 8: AI Features (AISDK)
- [ ] Install AI SDK (`ai` package from `@ai-sdk/provider` and `@ai-sdk/react`)
- [ ] Integrate with a language model provider (e.g., OpenAI, Anthropic) via API key
- [ ] Implement AI-assisted task description generation (based on title and context)
- [ ] Suggest assignees based on past activity and workload
- [ ] Generate summary of comments or activity within a task
- [ ] Ensure AI features are optionally enabled (e.g., via settings or plan limits)

### Milestone 9: Dark/Light Mode Toggle
- [ ] Implement theme toggle using Tailwind's dark mode (class-based or media query)
- [ ] Store user preference in localStorage or Supabase (for persistence across devices)
- [ ] Default to dark mode as per PRD
- [ ] Ensure all Shadcn UI components respect the theme
- [ ] Add toggle switch in navbar or settings menu

### Milestone 10: Testing, Bug Fixing, and Polish
- [ ] Write unit tests for components and utilities (using Vitest or Jest)
- [ ] Write end-to-end tests (using Playwright or Cypress) for critical paths
- [ ] Perform cross-browser testing (Chrome, Firefox, Safari)
- [ ] Optimize performance (image loading, bundle size, memoization)
- [ ] Accessibility audits (axe-core, manual testing)
- [ ] Fix bugs and address edge cases
- [ ] Prepare documentation and deployment scripts
- [ ] Deploy to Vercel (or another platform) with production environment variables

## Non-Functional Requirements
- **Code Quality**: Use ESLint with Next.js and TypeScript presets; consider adding Prettier for formatting.
- **Responsive Design**: Ensure the app works on mobile, tablet, and desktop.
- **Error Handling**: Implement error boundaries and retry mechanisms for API calls.
- **Loading States**: Show skeletons or spinners during data fetching.
- **Accessibility**: Follow WCAG guidelines (color contrast, keyboard navigation, ARIA labels).

## Open Questions / Decisions Needed
1. **State Management**: Should we use React Context, Zustand, or another state management library? (Given the use of Supabase, we might rely on its client-side libraries and React Query/SWR for server state.)
2. **Styling Approach**: Primarily Tailwind with Shadcn UI, but consider if custom CSS is needed for complex components.
3. **Authentication Scope**: Should we support magic links, social logins, or just email/password initially?
4. **AI Provider**: Which LLM provider to use for the AI SDK? (OpenAI is a common choice, but we should confirm.)
5. **Deployment Target**: Vercel is recommended, but we should confirm if the user has a preference.

## Notes
- This plan is iterative; milestones may overlap or be adjusted based on feedback.
- The plan assumes the use of Supabase as the primary database and auth provider.
- The MCP (Model Context Protocol) mentioned in the PRD likely refers to integrating external services via a standardized interface; we will need to clarify how this is to be implemented (possibly via custom MCP servers or using existing SDKs as implied by the PRD).