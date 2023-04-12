export default function MeasureBtn({ onClick, icon }: { onClick: () => void; icon: JSX.Element }) {
  return (
    <button type="button" onClick={onClick} className="my-0.5 w-fit hover:text-lime-700">
      {icon}
    </button>
  );
}
