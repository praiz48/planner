import { forwardRef } from "react";

interface CategorySelectorProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

const CategorySelector = forwardRef<HTMLSelectElement, CategorySelectorProps>(
  ({ label, ...props }, ref) => {
    return (
      <div className="mb-4">
        {label && (
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-200">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400 p-2 border dark:bg-gray-700 dark:text-gray-100 transition-all duration-200 cursor-pointer"
          {...props}
        >
          <option value="Work" className="dark:bg-gray-700 dark:text-gray-100">
            Work
          </option>
          <option
            value="Personal"
            className="dark:bg-gray-700 dark:text-gray-100"
          >
            Personal
          </option>
          <option
            value="Health"
            className="dark:bg-gray-700 dark:text-gray-100"
          >
            Health
          </option>
          <option
            value="Family"
            className="dark:bg-gray-700 dark:text-gray-100"
          >
            Family
          </option>
          <option
            value="Learning"
            className="dark:bg-gray-700 dark:text-gray-100"
          >
            Learning
          </option>
        </select>
      </div>
    );
  }
);

CategorySelector.displayName = "CategorySelector";

export default CategorySelector;
