import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { FilterBar } from './components/FilterBar';
import type { Task, Filter } from './types';

export default function App() {
  const [todos, setTodos] = useLocalStorage<Task[]>('todos', []);
  const [filter, setFilter] = useState<Filter>('all');

  function addTodo(title: string) {
    const newTodo: Task = {
      id: crypto.randomUUID(),
      title,
      description: '',
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  }

  function toggleTodo(id: string) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  const visibleTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <main style={{ maxWidth: 500, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>Todos</h1>
      <TodoForm onAdd={addTodo} />
      <FilterBar filter={filter} onChange={setFilter} />
      <TodoList
        tasks={visibleTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
      <p>
        {todos.filter((t) => !t.completed).length} items left
      </p>
    </main>
  );
}