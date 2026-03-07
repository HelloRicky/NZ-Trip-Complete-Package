import clsx from 'clsx';
import type { Priority } from '@/types';

const config: Record<Priority, { label: string; zh: string; classes: string }> = {
  high: { label: '🔴 Must Book', zh: '🔴 必须预订', classes: 'bg-red-100 text-red-800 border-red-200' },
  medium: { label: '🟡 Book Ahead', zh: '🟡 提前预订', classes: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
  low: { label: '🟢 Walk-in OK', zh: '🟢 现场购买', classes: 'bg-green-100 text-green-800 border-green-200' },
  optional: { label: '💰 Optional', zh: '💰 可选', classes: 'bg-purple-100 text-purple-800 border-purple-200' },
  free: { label: '✅ FREE', zh: '✅ 免费', classes: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
};

interface Props {
  priority: Priority;
  lang?: 'en' | 'zh';
  small?: boolean;
}

export default function PriorityBadge({ priority, lang = 'en', small }: Props) {
  const { label, zh, classes } = config[priority];
  return (
    <span
      className={clsx(
        'inline-flex items-center border rounded-full font-medium',
        classes,
        small ? 'text-xs px-2 py-0.5' : 'text-xs px-2.5 py-1'
      )}
    >
      {lang === 'zh' ? zh : label}
    </span>
  );
}
