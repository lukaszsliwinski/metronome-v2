import { IBtn } from '../types';

export default function TempoBtn({ onClick, icon, name }: IBtn) {
  return (
    <button
      role="button"
      aria-label={name}
      onClick={onClick}
      className="rounded-lg bg-white p-2 shadow-lg active:shadow-sm"
    >
      {icon}
    </button>
  );
}
