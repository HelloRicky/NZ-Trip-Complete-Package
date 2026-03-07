import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
  className?: string;
  accent?: 'emerald' | 'blue' | 'amber' | 'red' | 'purple';
}

const accentStyles = {
  emerald: 'border-l-emerald-500',
  blue: 'border-l-blue-500',
  amber: 'border-l-amber-500',
  red: 'border-l-red-500',
  purple: 'border-l-purple-500',
};

export default function InfoCard({ title, children, className, accent = 'emerald' }: Props) {
  return (
    <div className={clsx('bg-white rounded-xl border border-gray-200 shadow-sm border-l-4 overflow-hidden', accentStyles[accent], className)}>
      <div className="px-4 py-3 border-b border-gray-100">
        <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
      </div>
      <div className="px-4 py-3">{children}</div>
    </div>
  );
}
