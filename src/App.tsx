import { TaskProvider } from "./context/TaskContext";
import TaskList from "./components/TaskList";
import AddFrom from "./components/AddFrom";
import FilterTasks from "./components/FilterTasks";
function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 max-w-4xl flex flex-col min-h-screen">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
            Daily Planner Pro
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Organize your day with elegance and efficiency
          </p>
        </header>

        {/* Main Content */}
        <main className="bg-white dark:bg-gray-800 rounded-xl shadow-lg flex-grow pb-32 transition-all duration-300 hover:shadow-xl flex flex-col relative">
          <TaskProvider>
            <div className="p-6 space-y-6 flex-1">
              <FilterTasks />
              <TaskList />
            </div>
            <AddFrom />
          </TaskProvider>
        </main>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Your productive day starts here</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
