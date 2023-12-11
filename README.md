# Pokemon

This is an example application demonstrating a modern Typescript stack consisting of:

- React - Frontend view layer
- NestJS - Backend framework
- Vite - Frontend bundler
- NX - Monorepo tools
- Prisma - Database access
- Sqlite - Database

## Architecture

Application consists of two major components:

- Frontend - React/Vite SPA application is the main interface for user interaction
- Backend - NestJS/SQLite application fetches and summarizes content from Pokeapi.co on startup, and persists them on SQLite

```
         ┌─────────┐
         │ Browser │
         └────┬────┘
              │
  ┌───────────▼───────────┐
  │ Frontend              │
  │ (React/Vite)          │
  │ http://localhost:3000 │
  └───────────┬───────────┘
              │ via proxy (due to localhost CORS limits))
  ┌───────────▼───────────┐
  │ Backend               │
  │ (NestJS/SQLite)       │
  │ http://localhost:3001 │
  └───────────▲───────────┘
              │ fetch & summarize on startup
       ┌────────────┐
       │ Pokeapi.co │
       └────────────┘
```

## Running

Prerequisite

- modern Mac/Linux machine (only tested on Mac)
- Node.js 20+
- Git

```
git clone https://github.com/jwshin/pokemon-react-nest-typescript
cd pokemon-react-nest-typescript
npm install
npm run migrate
npm run backend
```

at this point, backend server should have started "fetch and summarize remote" task
that will take few moments to retrieve and summarize content from Pokeco.api.

After confirming "Backend listing on: http://localhost:3001" is seen in the output, run the following in another terminal

```
cd pokemon-react-nest-typescript
npm run frontend
```

visit http://localhost:3000
