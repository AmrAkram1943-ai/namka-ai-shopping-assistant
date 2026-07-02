import { cn } from '../../utils/cn'

const variants = {
  primary:
    'border-[#22C55E] bg-[#22C55E] text-[#09090B] hover:bg-[#10B981] hover:border-[#10B981]',
  secondary:
    'border-[#27272A] bg-[#18181B] text-[#FAFAFA] hover:border-[#3F3F46] hover:bg-[#202024]',
  ghost: 'border-transparent bg-transparent text-[#A1A1AA] hover:bg-[#18181B] hover:text-[#FAFAFA]',
}

function Button({
  as: Component = 'button',
  children,
  className,
  variant = 'primary',
  type = 'button',
  ...props
}) {
  return (
    <Component
      type={Component === 'button' ? type : undefined}
      className={cn(
        'inline-flex h-11 items-center justify-center gap-2 rounded-lg border px-4 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-50',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22C55E]',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button
