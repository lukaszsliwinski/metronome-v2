export default function TempoBtn({onClick, icon}: {onClick: () => void, icon: JSX.Element}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="hover:text-lime-700"
    >
      {icon}
    </button>
  );
}