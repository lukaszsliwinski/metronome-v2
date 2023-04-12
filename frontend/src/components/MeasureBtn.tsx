export default function MeasureBtn({onClick, icon}: {onClick: () => void, icon: JSX.Element}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-fit my-0.5 hover:text-lime-700"
    >
      {icon}
    </button>
  );
}