// src/components/TaskForm.tsx

export function TaskForm() {
  return (
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
  );
}

