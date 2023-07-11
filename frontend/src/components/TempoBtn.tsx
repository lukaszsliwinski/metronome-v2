import { IBtn } from '../types';

export default function TempoBtn({ onClick, icon, name }: IBtn) {
  return (
    <button role="button" aria-label={name} onClick={onClick} className="hover:text-lime-700">
      {icon}
    </button>
  );
}
