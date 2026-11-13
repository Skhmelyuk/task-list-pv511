// src/components/Counter.tsx

interface CounterProps {
  total: number;
  completed: number;
}

export function Counter({ total, completed }: CounterProps) {
  const active = Math.max(0, total - completed);
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
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
  );
}

