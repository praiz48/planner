import React from "react";
import { useTasks } from "../hooks/UseTasks";
import Taskitem from "./Taskitem";
const TaskList = () => {
  const { tasks, filterCategory } = useTasks();
  // const [draggedTask, setDraggedTask] = React.useState<Task | null>(null);
  const filteredTasks =
    filterCategory === "all"
      ? tasks
      : tasks.filter((task) => task.category === filterCategory);
  return (
    <div className="pb-24">
      {" "}
      {/* Extra padding to account for sticky add form */}
      {filteredTasks.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 gap-4">
            {filteredTasks.map((task) => (
              <Taskitem key={task.id} Taskk={task} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12 px-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-dashed border-gray-200 dark:border-gray-700 mt-6">
          <div className="mx-auto max-w-md">
            <svg
              className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <h2 className="mt-3 text-xl font-bold text-gray-700 dark:text-gray-300">
              No Tasks Yet
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              {filterCategory === "all"
                ? "No tasks available. Add some tasks to get started!"
                : `No tasks in the ${filterCategory} category.`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
