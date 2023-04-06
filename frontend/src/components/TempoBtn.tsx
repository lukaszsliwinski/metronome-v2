export default function TempoBtn({onClick, icon}: {onClick: () => void, icon: JSX.Element}) {
  return (
    <button
      type="button"
      onClick={onClick}
      // className="h-fit text-green-700 hover:text-white border border-green-700 hover:bg-green-800 font-medium rounded-lg  p-2.5 text-center inline-flex items-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600"
      className="hover:text-lime-700"
    >
      {icon}
    </button>
  );
}