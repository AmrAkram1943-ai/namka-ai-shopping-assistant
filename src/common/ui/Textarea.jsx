import { cn } from '../../utils/cn'

function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        'max-h-48 min-h-20 w-full resize-none border-0 bg-transparent py-3 text-base leading-7 text-[#FAFAFA] caret-[#22C55E] placeholder:text-[#71717A]',
        'focus:outline-none disabled:cursor-not-allowed disabled:opacity-60',
        className,
      )}
      rows={2}
      {...props}
    />
  )
}

export default Textarea
