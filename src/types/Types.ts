export type Priority = "high" | "medium" | "low";

export interface Task {
  id: string;
  description?: string;
  completed: boolean;
  priority: Priority;
  category: string;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  color: string;
}
