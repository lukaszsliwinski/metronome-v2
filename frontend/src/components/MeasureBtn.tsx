export default function MeasureBtn({onClick, icon}: {onClick: () => void, icon: JSX.Element}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm my-1 px-2.5 py-1 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
    >
      {icon}
    </button>
  );
}