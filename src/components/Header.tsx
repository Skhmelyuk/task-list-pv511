// src/components/Header.tsx

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

export function Header({
  title = "Task List",
  subtitle = "Організуй свої щоденні справи та завдання",
}: HeaderProps) {
  return (
    <header className="app-header">
      <div className="app-header__icon-wrapper">
        <span className="app-header__icon">📋</span>
      </div>
      <h1 className="app-header__title">{title}</h1>
      <p className="app-header__subtitle">{subtitle}</p>
    </header>
  );
}

