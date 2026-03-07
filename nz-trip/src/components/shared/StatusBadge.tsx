import clsx from 'clsx';
import type { BookingStatus } from '@/types';

const config: Record<BookingStatus, { label: string; zh: string; classes: string }> = {
  booked: { label: '✅ Booked', zh: '✅ 已预订', classes: 'bg-green-100 text-green-800' },
  pending: { label: '⏳ Pending', zh: '⏳ 待定', classes: 'bg-yellow-100 text-yellow-800' },
  completed: { label: '🎉 Done', zh: '🎉 已完成', classes: 'bg-blue-100 text-blue-800' },
  'not-needed': { label: '—', zh: '—', classes: 'bg-gray-100 text-gray-600' },
};

interface Props {
  status: BookingStatus;
  lang?: 'en' | 'zh';
}

export default function StatusBadge({ status, lang = 'en' }: Props) {
  const { label, zh, classes } = config[status];
  return (
    <span className={clsx('inline-flex items-center text-xs px-2 py-0.5 rounded-full font-medium', classes)}>
      {lang === 'zh' ? zh : label}
    </span>
  );
}
