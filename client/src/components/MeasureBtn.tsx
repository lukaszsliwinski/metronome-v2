import { IBtn } from '../types';

export default function MeasureBtn({ onClick, icon, name, position }: IBtn) {
  return (
    <button
      role="button"
      aria-label={name}
      onClick={onClick}
      className={`
        my-px w-fit border border-slate-300 px-3.5 hover:bg-slate-300 hover:text-slate-900
        ${position === 'top' ? ' rounded-t-lg' : 'rounded-b-lg'}
      `}
    >
      {icon}
    </button>
  );
}
