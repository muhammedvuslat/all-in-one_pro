import { useTheme } from "../features/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export const ButtonPrimary = ({ props }) => {
  const { text, rounded, styled } = props;
  return (
    <button
      type="submit"
      className={` end-2.5 bottom-2.5   font-medium rounded-${rounded} text-sm px-4 py-2 dark:bg-dark-quaternary bg-light-quintuple dark:hover:bg-dark-eighth  hover:bg-light-ninth text-light-sixth dark:text-dark-sixth ${styled}`}
    >
      {text}
    </button>
  );
};

export const ButtonSecondary = ({ props }) => {
  const { text, rounded, styled } = props;

  return (
    <button
      type="submit"
      className={`w-auto mx-2 mt-0 font-medium rounded-${rounded} text-sm px-4 py-2 dark:bg-dark-quaternary bg-light-quintuple dark:hover:bg-dark-eighth  hover:bg-light-ninth text-light-sixth dark:text-dark-sixth ${styled} `}
    >
      {text}
    </button>
  );
};

export const ButtonInputCurrent = ({ content }) => {
  if (content === "+") {
    return (
      <button className="btn dark:bg-dark-quaternary dark:text-white bg-light-quintuple text-black  w-10 rounded-[16px]">
        {content}
      </button>
    );
  } else {
    return (
      <button className="btn bg-dark-quaternary dark:bg-dark-quintuple dark:text-white w-10 rounded-[16px]">
        -
      </button>
    );
  }
};

export const ButtonSubmit = ({ content }) => {
  return (
    <button
      type="submit"
      className={`end-2.5 bottom-2.5   font-medium rounded-3xl text-sm px-4 py-2 dark:bg-dark-quaternary bg-light-quintuple dark:hover:bg-dark-eighth  hover:bg-light-ninth text-light-sixth dark:text-dark-sixth `}
    >
      {content}
    </button>
  );
};

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full transition-colors duration-300 
        ${isDark ? "bg-dark-quaternary" : "bg-light-quintuple"}`}
    >
      <span
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300
        ${isDark ? "translate-x-8" : "translate-x-0"}`}
      >
        {isDark ? (
          <MoonIcon className="h-4 w-4 text-dark-quaternary" />
        ) : (
          <SunIcon className="h-4 w-4 text-light-quintuple" />
        )}
      </span>
    </button>
  );
};
