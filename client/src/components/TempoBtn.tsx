import { IBtn } from '../types';

export default function TempoBtn({ onClick, icon, name }: IBtn) {
  return (
    <button
      role="button"
      aria-label={name}
      onClick={onClick}
      className="rounded-lg border border-slate-300 p-2 hover:bg-slate-300 hover:text-slate-900"
    >
      {icon}
    </button>
  );
}
