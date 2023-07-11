import { IBtn } from '../types';

export default function MeasureBtn({ onClick, icon, name }: IBtn) {
  return (
    <button
      role="button"
      aria-label={name}
      onClick={onClick}
      className="my-0.5 w-fit hover:text-lime-700"
    >
      {icon}
    </button>
  );
}
