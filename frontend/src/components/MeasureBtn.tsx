export default function MeasureBtn({onClick, icon}: {onClick: () => void, icon: JSX.Element}) {
  return (
    <button
      type="button"
      onClick={onClick}
      // className="w-fit text-green-700 hover:text-white border border-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-2.5 py-1 text-center my-0.5 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600"
      className="w-fit my-0.5 hover:text-lime-700"
    >
      {icon}
    </button>
  );
}