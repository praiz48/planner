import React, { useRef, useEffect } from "react";
import { useTasks } from "../hooks/UseTasks";
import CategorySelector from "./CategorySelector";
import PrioritySelector from "./PrioritySelector";
import type { Task, Priority } from "../types/Types";
const AddFrom = () => {
  const { addTask, updateTask, registerEditTask, editing } = useTasks();

  const [id, setId] = React.useState<string | null>(null);
  const taskInputRef = useRef<HTMLInputElement>(null);
  const categoryInputRef = useRef<HTMLSelectElement>(null);
  const priorityInputRef = useRef<HTMLSelectElement>(null);
  const handleAddTask = () => {
    const taskDescription = taskInputRef.current?.value;
    const category = categoryInputRef.current?.value;
    const priority = priorityInputRef.current?.value;

    if (taskDescription && category && priority) {
      const newTask: Omit<Task, "id" | "completed" | "createdAt"> = {
        description: taskDescription,

        category,
        priority: priority as Priority,
      };
      addTask(newTask);
      if (taskInputRef.current) {
        taskInputRef.current.value = "";
      }
    }
  };
  const editTask = (task: Task) => {
    taskInputRef.current!.value = task.description ?? "";
    categoryInputRef.current!.value = task.category;
    priorityInputRef.current!.value = task.priority;
    setId(task.id);
  };
  useEffect(() => {
    if (registerEditTask) {
      registerEditTask(editTask);
    }
  }, []);
  const handleUpdateTask = () => {
    const taskDescription = taskInputRef.current?.value;
    const category = categoryInputRef.current?.value;
    const priority = priorityInputRef.current?.value;

    if (taskDescription && category && priority) {
      const newTask: Omit<Task, "id" | "completed" | "createdAt"> = {
        description: taskDescription,

        category,
        priority: priority as Priority,
      };
      updateTask(id!, newTask);
      if (taskInputRef.current) {
        taskInputRef.current.value = "";
      }
    }
  };

  return (
    <div className="sticky bottom-0 bg-white dark:bg-gray-800 shadow-lg z-50 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="container mx-auto px-4 py-4 max-w-4xl">
        <form
          onSubmit={editing ? handleUpdateTask : handleAddTask}
          className="space-y-4 max-w-2xl mx-auto"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Description
            </label>
            <input
              ref={taskInputRef}
              type="text"
              required
              placeholder="What needs to be done?"
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm p-2 border dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 transition-all duration-200"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <PrioritySelector label="Priorities :" ref={priorityInputRef} />
            <CategorySelector label="Categories :" ref={categoryInputRef} />
          </div>

          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-md font-medium text-white transition-all duration-200 ${
              editing
                ? "bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
                : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            } shadow-md hover:shadow-lg`}
          >
            {editing ? "Update Task" : "Add Task"}
          </button>
        </form>
      </div>
    </div>
  );
};
/*  */
export default AddFrom;
