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
      my-1.5 rounded border border-slate-200 bg-slate-100 text-sm tracking-widest text-slate-900 shadow
      ${position === 'top' ? 'rounded-t-[3rem] rounded-b' : ''}
      ${position === 'bottom' ? 'rounded-b-[3rem] rounded-t' : ''}
    `}
    >
      {children}
    </div>
  );
}
