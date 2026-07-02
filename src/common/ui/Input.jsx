import { cn } from '../../utils/cn'

function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        'h-12 w-full border-0 bg-transparent text-base text-[#FAFAFA] placeholder:text-[#71717A]',
        'focus:outline-none disabled:cursor-not-allowed disabled:opacity-60',
        className,
      )}
      {...props}
    />
  )
}

export default Input
