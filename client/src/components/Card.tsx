import { ReactNode } from 'react';

export default function Card({
  children,
  position
}: {
  children: ReactNode;
  position?: 'top' | 'bottom';
}) {
  return (
    <div
      className={`
      shadow-mg my-1 rounded border border-slate-300 bg-slate-200 text-sm tracking-widest text-slate-900
      ${position === 'top' ? 'rounded-t-[3rem] rounded-b' : ''}
      ${position === 'bottom' ? 'rounded-b-[3rem] rounded-t' : ''}
    `}
    >
      {children}
    </div>
  );
}
