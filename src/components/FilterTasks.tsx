import { useTasks } from "../hooks/UseTasks";
const FilterTasks = () => {
  const { filterCategory, setFilterCategory } = useTasks();

  return (
    <div className="mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <label
        htmlFor="category-filter"
        className="block text-sm font-medium mb-2 dark:text-gray-300"
      >
        Filter by Category:
      </label>
      <select
        id="category-filter"
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="all">All Categories</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Health">Health</option>
        <option value="Family">Family</option>
        <option value="Learning">Learning</option>
      </select>
    </div>
  );
};

export default FilterTasks;
