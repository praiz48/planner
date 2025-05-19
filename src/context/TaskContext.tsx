// src/context/TaskContext.tsx
import React, { createContext, useState } from "react";
import type { Task, Priority } from "../types/Types";

interface TaskContextType {
  tasks: Task[];
  editing: boolean;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;

  addTask: (task: Omit<Task, "id" | "completed" | "createdAt">) => void;
  toggleComplete: (id: string) => void;
  updateTask: (id: string, updatedTask: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  reorderTasks: (newOrder: Task[]) => void;
  editTask: (task: Task) => void;
  registerEditTask?: (func: (task: Task) => void) => void;
  filterCategory: string;
  setFilterCategory: (category: string) => void;
}
const demoTasks: Task[] = [
  {
    id: "1",
    description: "Complete project proposal",
    completed: false,
    priority: "high" as Priority,
    category: "Work",
    createdAt: new Date(2023, 5, 15),
  },
  {
    id: "2",
    description: "Buy groceries",
    completed: true,
    priority: "medium" as Priority,
    category: "Personal",
    createdAt: new Date(2023, 5, 14),
  },
  {
    id: "3",
    description: "Morning workout",
    completed: false,
    priority: "low" as Priority,
    category: "Health",
    createdAt: new Date(2023, 5, 16),
  },
  {
    id: "4",
    description: "Call mom",
    completed: false,
    priority: "medium" as Priority,
    category: "Family",
    createdAt: new Date(2023, 5, 13),
  },
  {
    id: "5",
    description: "Read React documentation",
    completed: true,
    priority: "high" as Priority,
    category: "Learning",
    createdAt: new Date(2023, 5, 12),
  },
];
export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : demoTasks;
  });
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [editing, setEditing] = useState(false);
  const [editTaskFunc, setEditTaskFunc] = useState<(task: Task) => void>(
    () => () => {}
  );
  // Method for components to register their editTask function
  const registerEditTask = (func: (task: Task) => void) => {
    setEditTaskFunc(() => func);
  };

  // Save to localStorage whenever tasks or categories change
  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Omit<Task, "id" | "completed" | "createdAt">) => {
    setTasks((prev) => [
      ...prev,
      {
        ...task,
        id: Date.now().toString(),
        completed: false,
        createdAt: new Date(),
      },
    ]);
  };

  const toggleComplete = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const updateTask = (id: string, updatedTask: Partial<Task>) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
    setEditing(false);
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const reorderTasks = (newOrder: Task[]) => {
    setTasks(newOrder);
  };

  return (
    <TaskContext.Provider
      value={{
        editing,
        setEditing,
        filterCategory,
        setFilterCategory,
        tasks,
        editTask: editTaskFunc,
        registerEditTask,
        addTask,
        toggleComplete,
        updateTask,
        deleteTask,
        reorderTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
