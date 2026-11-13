// Опис типів для завдань
type Priority = "low" | "normal" | "high";

interface Task {
  id: number | string;
  text: string;
  completed: boolean;
  priority: Priority;
  date?: string;
  isOverdue?: boolean;
}

// Демонстраційні статичні дані (для перегляду структури та стилів різних станів)
const MOCK_TASKS: Task[] = [
  {
    id: 1,
    text: "Підготувати практичне завдання зі стилізації компонентів",
    completed: false,
    priority: "high",
    date: "2026-11-12",
    isOverdue: true, // Прострочений дедлайн
  },
  {
    id: 2,
    text: "Розробити структуру та стилі інтерфейсу списку завдань",
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

const PRIORITY_LABELS: Record<Priority, string> = {
  low: "Низький",
  normal: "Звичайний",
  high: "Високий",
};

export function App() {
  const total = MOCK_TASKS.length;
  const completed = MOCK_TASKS.filter((task) => task.completed).length;
  const active = Math.max(0, total - completed);
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <main className="app-container">
      {/* 1. Шапка додатку (Header) */}
      <header className="app-header">
        <div className="app-header__icon-wrapper">
          <span className="app-header__icon">📋</span>
        </div>
        <h1 className="app-header__title">Task List</h1>
        <p className="app-header__subtitle">
          Організуй свої щоденні справи та завдання
        </p>
      </header>

      {/* 2. Форма додавання завдання (TaskForm) */}
      <form className="task-form" onSubmit={(e) => e.preventDefault()}>
        <div className="task-form__input-group">
          <input
            type="text"
            className="task-form__input"
            placeholder="Що потрібно зробити?"
            defaultValue=""
            autoComplete="off"
          />
        </div>

        <div className="task-form__controls">
          <div className="task-form__group">
            <label className="task-form__label" htmlFor="priority-select">
              Пріоритет:
            </label>
            <select
              id="priority-select"
              className="task-form__select"
              defaultValue="normal"
            >
              <option value="low">🟢 Низький</option>
              <option value="normal">🟡 Звичайний</option>
              <option value="high">🔴 Високий</option>
            </select>
          </div>

          <div className="task-form__group">
            <label className="task-form__label" htmlFor="deadline-input">
              Дедлайн:
            </label>
            <input
              id="deadline-input"
              type="date"
              className="task-form__date"
            />
          </div>

          <button type="submit" className="task-form__submit-btn">
            <span className="task-form__btn-icon">＋</span>
            <span>Додати</span>
          </button>
        </div>
      </form>

      {/* 3. Панель статистики та прогресу (Counter) */}
      <section className="counter" aria-label="Статистика завдань">
        <div className="counter__grid">
          <div className="counter__card counter__card--total">
            <span className="counter__label">Всього</span>
            <span className="counter__value">{total}</span>
          </div>

          <div className="counter__card counter__card--active">
            <span className="counter__label">В процесі</span>
            <span className="counter__value">{active}</span>
          </div>

          <div className="counter__card counter__card--completed">
            <span className="counter__label">Виконано</span>
            <span className="counter__value">{completed}</span>
          </div>
        </div>

        <div className="counter__progress">
          <div className="counter__progress-info">
            <span className="counter__progress-label">Прогрес виконання</span>
            <span className="counter__progress-value">{percentage}%</span>
          </div>
          <div className="counter__progress-bar">
            <div
              className="counter__progress-fill"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </section>

      {/* 4. Список завдань (TodoList) */}
      <section aria-label="Список завдань">
        {MOCK_TASKS.length === 0 ? (
          <div className="todo-list-empty">
            <div className="todo-list-empty__icon">✨</div>
            <h3 className="todo-list-empty__title">Список завдань порожній</h3>
            <p className="todo-list-empty__subtitle">
              Додайте нове завдання вище, щоб розпочати свій продуктивний день!
            </p>
          </div>
        ) : (
          <ul className="todo-list">
            {MOCK_TASKS.map((task) => {
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
                <li key={task.id} className={itemClasses}>
                  <label
                    className="todo-item__checkbox-label"
                    title={
                      task.completed
                        ? "Виконано"
                        : "Позначити як виконане"
                    }
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
                            <span className="todo-item__overdue-alert">
                              ⚠️ Прострочено
                            </span>
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
            })}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;
