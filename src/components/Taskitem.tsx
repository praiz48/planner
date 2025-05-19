import React, { useState } from "react";
import { useTasks } from "../hooks/UseTasks";
import type { Task } from "../types/Types";
interface TaskitemProps {
  Taskk: Task;
}

const Taskitem = ({ Taskk }: TaskitemProps) => {
  const { toggleComplete, deleteTask, editTask, setEditing } = useTasks();
  const [isCompleted, setIsCompleted] = useState(Taskk.completed);
  const handleToggle = () => {
    toggleComplete(Taskk.id);
    setIsCompleted(!isCompleted);
  };
  return (
    <div className="group">
      <div
        className={`bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700/30 rounded-lg p-4 mb-4 transition-all duration-200 hover:shadow-lg dark:hover:shadow-gray-700/50 ${
          Taskk.priority === "high"
            ? "border-l-4 border-red-500 dark:border-red-400"
            : Taskk.priority === "medium"
            ? "border-l-4 border-yellow-500 dark:border-yellow-400"
            : "border-l-4 border-green-500 dark:border-green-400"
        } ${isCompleted ? "opacity-70" : ""}`}
      >
        <div className="flex items-start mb-3">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleToggle}
            className="h-5 w-5 mt-1 mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:checked:bg-blue-500"
          />
          <div className="flex-1">
            <h3
              className={`text-lg font-semibold ${
                isCompleted
                  ? "line-through text-gray-400 dark:text-gray-500"
                  : "text-gray-800 dark:text-gray-200"
              }`}
            >
              {Taskk.description}
            </h3>

            <div className="flex flex-wrap items-center gap-3 mt-2 mb-3">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  Taskk.priority === "high"
                    ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200"
                    : Taskk.priority === "medium"
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200"
                    : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200"
                }`}
              >
                {Taskk.priority.toUpperCase()}
              </span>

              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                {Taskk.category}
              </span>

              <span className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(Taskk.createdAt).toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-2 pt-2 border-t border-gray-100 dark:border-gray-700">
          <button
            onClick={() => {
              editTask(Taskk);
              setEditing(true);
            }}
            className="px-3 py-1.5 text-sm font-medium rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-200 dark:hover:bg-blue-900/50 transition-colors"
          >
            Edit
          </button>
          <button
            onClick={() => deleteTask(Taskk.id)}
            className="px-3 py-1.5 text-sm font-medium rounded-md bg-red-50 text-red-700 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-200 dark:hover:bg-red-900/50 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Taskitem;
