// Module containing different types of button components.
import { useTheme } from "../features/ThemeContext";
import {
  SunIcon,
  MoonIcon,
  UserPlusIcon,
  UserMinusIcon,
  CloudArrowUpIcon,
} from "@heroicons/react/24/solid";

// Button component for search bar
export const ButtonSearchBar = ({ content }) => {
  return (
    <button
      type="submit"
      className="end-2.5 bottom-2.5 font-medium rounded-3xl text-sm px-4 py-2 dark:bg-dark-quaternary bg-light-quintuple dark:hover:bg-dark-eighth hover:bg-light-ninth text-light-sixth dark:text-dark-sixth absolute"
    >
      {content}
    </button>
  );
};

// Button component for form submission
export const ButtonSubmit = ({ content }) => {
  return (
    <button
      type="submit"
      className="end-2.5 bottom-2.5 w-fit font-medium rounded-3xl text-sm px-4 py-2 dark:bg-dark-quaternary gap-4 bg-light-quintuple dark:hover:bg-dark-eighth hover:bg-light-ninth text-light-sixth dark:text-dark-sixth flex text-center"
    >
      <CloudArrowUpIcon className="h-6 w-6 dark:text-dark-sixth text-light-sixth" />
      {content}
    </button>
  );
};

// Theme toggle button component
export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
        isDarkMode ? "bg-dark-quaternary" : "bg-light-quintuple"
      }`}
    >
      <span
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 ${
          isDarkMode ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {isDarkMode ? (
          <MoonIcon className="h-4 w-4 text-dark-quaternary" />
        ) : (
          <SunIcon className="h-4 w-4 text-light-quintuple" />
        )}
      </span>
    </button>
  );
};

// Button component for adding a new customer
export const ButtonNewCustomer = ({ content, onClick }) => {
  return (
    <button
      type="submit"
      className="font-medium rounded-3xl text-sm px-4 py-2 dark:bg-dark-quaternary bg-light-quintuple dark:hover:bg-dark-eighth hover:bg-light-ninth text-light-sixth dark:text-dark-sixth flex gap-4"
      title="Add New Custumer"
      onClick={onClick}
    >
      <UserPlusIcon className="h-6 w-6 dark:text-dark-sixth text-light-sixth" />
      {content}
    </button>
  );
};

// Button component for deleting a customer
export const ButtonDelete = ({ content, onClick }) => {
  return (
    <button
      type="button"
      className="font-medium w-fit rounded-3xl text-sm px-4 py-2 dark:bg-dark-tenth bg-light-tenth dark:hover:bg-dark-eleventh hover:bg-light-eleventh text-light-sixth dark:text-dark-sixth flex gap-4 text-center justify-center"
      title="Add New Custumer"
      onClick={onClick}
    >
      <UserMinusIcon className="h-6 w-6 dark:text-dark-sixth text-light-sixth" />
      {content}
    </button>
  );
};
