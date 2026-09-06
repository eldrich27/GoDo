# GoDo

A todo list app built to practice core TypeScript patterns in React: typed data models, generic hooks, typed props, and typed event handlers. Tasks can be added, completed, deleted, and filtered (All / Active / Completed), and persist across page refreshes via `localStorage`.

## Features

- Add, complete, and delete tasks
- Filter tasks by status: All / Active / Completed
- State persists in `localStorage` — a page refresh keeps your tasks

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [oxlint](https://oxc.rs/docs/guide/usage/linter.html)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- npm

### Installation

```bash
git clone https://github.com/<your-username>/GoDo.git
cd GoDo/GoDo-app
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server with hot module replacement.

### Build

```bash
npm run build
```

Type-checks the project and builds a production bundle to `dist/`.

### Preview

```bash
npm run preview
```

Serves the production build locally.

### Lint

```bash
npm run lint
```

## Project Structure

```
GoDo/
└── GoDo-app/
    ├── src/
    │   ├── components/     # TodoForm, TodoList, TodoItem, FilterBar
    │   ├── hooks/          # useLocalStorage and other custom hooks
    │   ├── types/          # Todo interface and shared types
    │   ├── App.tsx
    │   └── main.tsx
    ├── public/
    ├── package.json
    └── vite.config.ts
```

## Data Model

```ts
interface Todo {
  id: string;
  title: string;
  completed: boolean;
}
```

## Key TypeScript Concepts Practiced

- **Interfaces** for the `Todo` data model
- **Typed props** on every component, using utility types like `Pick<Todo, 'id'>` or `Omit<Todo, 'completed'>` where a component doesn't need the full shape
- **Typed state** with `useState<T>`
- **Typed event handlers** using `React.ChangeEvent` and `React.FormEvent`
- **Generics**, via a reusable `useLocalStorage<T>(key: string, initialValue: T)` hook
- **Lifted state**, with typed handlers passed down from `App` to child components

## Architecture Notes

- State lives in `App` and is passed down to `TodoForm`, `TodoList`, `TodoItem`, and `FilterBar` as typed props.
- `useLocalStorage` is a generic hook responsible for reading/writing any typed value to `localStorage`, keeping persistence logic out of components.
- Components are kept presentational where possible, with state and handlers owned by their parent.

## License

MIT
