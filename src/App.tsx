// src/App.tsx
import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";
import { Counter } from "./components/Counter";
import { TodoList } from "./components/TodoList";
import type { Task } from "./types";

const MOCK_TASKS: Task[] = [
  {
    id: 1,
    text: "Підготувати практичне завдання зі стилізації компонентів",
    completed: false,
    priority: "high",
    date: "2026-11-12",
    isOverdue: true,
  },
  {
    id: 2,
    text: "Розробити структуру компонентів Header, TaskForm, Counter, TodoList",
    completed: true,
    priority: "normal",
    date: "2026-11-14",
  },
  {
    id: 3,
    text: "Налаштувати стилізацію через глобальні CSS-стилі",
    completed: false,
    priority: "low",
    date: "2026-11-20",
  },
];

export function App() {
  const total = MOCK_TASKS.length;
  const completed = MOCK_TASKS.filter((task) => task.completed).length;

  return (
    <main className="app-container">
      <Header />
      <TaskForm />
      <Counter total={total} completed={completed} />
      <TodoList tasks={MOCK_TASKS} />
    </main>
  );
}

export default App;
