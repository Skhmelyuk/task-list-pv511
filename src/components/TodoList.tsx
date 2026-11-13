// src/components/TodoList.tsx
import type { Task } from "../types";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  tasks: Task[];
}

export function TodoList({ tasks }: TodoListProps) {
  if (tasks.length === 0) {
    return (
      <div className="todo-list-empty">
        <div className="todo-list-empty__icon">✨</div>
        <h3 className="todo-list-empty__title">Список завдань порожній</h3>
        <p className="todo-list-empty__subtitle">
          Додайте нове завдання вище, щоб розпочати свій продуктивний день!
        </p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

