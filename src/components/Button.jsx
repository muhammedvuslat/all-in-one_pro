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
