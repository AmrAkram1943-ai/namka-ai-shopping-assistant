import { cn } from '../../utils/cn'

function Surface({ as: Component = 'div', children, className, ...props }) {
  return (
    <Component
      className={cn('border border-[#27272A] bg-[#18181B]/90 shadow-2xl shadow-black/20', className)}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Surface
