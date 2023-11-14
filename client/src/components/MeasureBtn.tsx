import { IBtn } from '../types';

export default function MeasureBtn({ onClick, icon, name, position }: IBtn) {
  return (
    <button
      role="button"
      aria-label={name}
      onClick={onClick}
      className={`
        my-px w-fit bg-white px-3.5 shadow-lg active:shadow-sm
        ${position === 'top' ? ' rounded-t-lg' : 'rounded-b-lg'}
      `}
    >
      {icon}
    </button>
  );
}
