# Diverge Backend

This backend directory is intentionally separated from the frontend so your React app remains UI-only while the API and database logic can be built independently.

## Structure

- `src/server.ts` - bootstraps the API
- `src/app.ts` - Express app creation and middleware
- `src/config/env.ts` - environment configuration
- `src/db/prisma.ts` - Prisma client
- `src/routes` - API route files
- `src/controllers` - request handlers
- `src/services` - business logic

## Quick start

1. Copy `.env.example` to `.env`
2. Update `DATABASE_URL` for your PostgreSQL instance
3. Install dependencies:

```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

## Database

This foundation is prepared for MongoDB and Prisma, matching the entity model already reflected in the frontend types.

## Notes

- The app is scaffolded without altering the frontend.
- The schema is designed to support customers, technicians, tickets, jobs, plans, invoices, payments, and upgrade requests.
- MongoDB relationship fields use ObjectId-compatible Prisma mappings.
