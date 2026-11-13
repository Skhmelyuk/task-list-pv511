// src/types/index.ts

// Можливі рівні пріоритету завдання
export type Priority = "low" | "normal" | "high";

// Інтерфейс окремого завдання
export interface Task {
  id: number | string;
  text: string;
  completed: boolean;
  priority: Priority;
  date?: string;
  isOverdue?: boolean;
}

