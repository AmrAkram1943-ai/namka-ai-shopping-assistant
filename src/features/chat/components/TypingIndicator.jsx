import { motion } from 'framer-motion'

const dots = [0, 1, 2]

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 rounded-full border border-[#27272A] bg-[#18181B] px-4 py-3">
      {dots.map((dot) => (
        <motion.span
          key={dot}
          animate={{ opacity: [0.35, 1, 0.35], y: [0, -2, 0] }}
          className="size-1.5 rounded-full bg-[#A1A1AA]"
          transition={{ duration: 1, repeat: Infinity, delay: dot * 0.12 }}
        />
      ))}
    </div>
  )
}

export default TypingIndicator
