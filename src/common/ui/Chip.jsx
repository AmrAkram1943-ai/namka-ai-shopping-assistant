import { cn } from '../../utils/cn'

function Chip({ children, className, type = 'button', ...props }) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex h-10 items-center rounded-full border border-[#27272A] bg-[#18181B]/80 px-4 text-sm font-medium text-[#D4D4D8] transition',
        'hover:border-[#3F3F46] hover:bg-[#202024] hover:text-[#FAFAFA]',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22C55E]',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Chip
