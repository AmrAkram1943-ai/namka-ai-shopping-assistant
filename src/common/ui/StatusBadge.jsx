import { cn } from '../../utils/cn'

function StatusBadge({ children, className, tone = 'neutral' }) {
  const tones = {
    neutral: 'border-[#27272A] bg-[#18181B] text-[#A1A1AA]',
    success: 'border-[#22C55E]/30 bg-[#22C55E]/10 text-[#86EFAC]',
  }

  return (
    <span
      className={cn(
        'inline-flex min-h-7 items-center rounded-full border px-2.5 text-xs font-medium',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

export default StatusBadge
