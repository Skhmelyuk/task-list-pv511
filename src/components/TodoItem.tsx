// src/components/TodoItem.tsx
import type { Task, Priority } from "../types";

interface TodoItemProps {
  task: Task;
}

const PRIORITY_LABELS: Record<Priority, string> = {
  low: "Низький",
  normal: "Звичайний",
  high: "Високий",
};

export function TodoItem({ task }: TodoItemProps) {
  const isOverdue = Boolean(task.isOverdue && !task.completed);

  const itemClasses = [
    "todo-item",
    `todo-item--${task.priority}`,
    task.completed ? "todo-item--completed" : "",
    isOverdue ? "todo-item--overdue" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <li className={itemClasses}>
      <label
        className="todo-item__checkbox-label"
        title={task.completed ? "Виконано" : "Позначити як виконане"}
      >
        <input
          type="checkbox"
          className="todo-item__checkbox"
          defaultChecked={task.completed}
        />
      </label>

      <div className="todo-item__content">
        <p className="todo-item__text">{task.text}</p>
        <div className="todo-item__meta">
          <span
            className={`todo-item__badge todo-item__badge--${task.priority}`}
          >
            {PRIORITY_LABELS[task.priority]}
          </span>
          {task.date && (
            <span
              className={`todo-item__date ${
                isOverdue ? "todo-item__date--overdue" : ""
              }`}
            >
              📅 {task.date}
              {isOverdue && (
                <span className="todo-item__overdue-alert">⚠️ Прострочено</span>
              )}
            </span>
          )}
        </div>
      </div>

      <button
        type="button"
        className="todo-item__delete-btn"
        title="Видалити завдання"
      >
        🗑️
      </button>
    </li>
  );
}

