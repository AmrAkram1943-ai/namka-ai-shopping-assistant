import { cn } from '../../utils/cn'

function IconButton({ children, className, label, type = 'button', ...props }) {
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      className={cn(
        'inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-[#27272A] bg-[#18181B] text-[#FAFAFA] transition',
        'hover:border-[#3F3F46] hover:bg-[#202024]',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22C55E]',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default IconButton
