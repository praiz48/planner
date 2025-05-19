import { forwardRef } from "react";
interface PrioritySelectorProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

const PrioritySelector = forwardRef<HTMLSelectElement, PrioritySelectorProps>(
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
          <option value="high" className="dark:bg-gray-700 dark:text-gray-100">
            High Priority
          </option>
          <option
            value="medium"
            selected
            className="dark:bg-gray-700 dark:text-gray-100"
          >
            Medium Priority
          </option>
          <option value="low" className="dark:bg-gray-700 dark:text-gray-100">
            Low Priority
          </option>
        </select>
      </div>
    );
  }
);

PrioritySelector.displayName = "PrioritySelector";

export default PrioritySelector;
