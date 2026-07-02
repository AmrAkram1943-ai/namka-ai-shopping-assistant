import { SendHorizontal, Sparkles } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import IconButton from '../../../common/ui/IconButton'
import Surface from '../../../common/ui/Surface'
import Textarea from '../../../common/ui/Textarea'
import { cn } from '../../../utils/cn'

function ChatInput({ disabled, isDocked, onSubmit }) {
  const [value, setValue] = useState('')
  const textareaRef = useRef(null)

  useEffect(() => {
    const textarea = textareaRef.current

    if (!textarea) return

    textarea.style.height = 'auto'
    textarea.style.height = `${Math.min(textarea.scrollHeight, 192)}px`
  }, [value])

  function submitMessage() {
    const message = value.trim()

    if (!message || disabled) {
      return
    }

    onSubmit(message)
    setValue('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    submitMessage()
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      submitMessage()
    }
  }

  return (
    <motion.form
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.25 }}
      onSubmit={handleSubmit}
      className={cn(
        'mx-auto w-full max-w-3xl',
        isDocked &&
          'fixed inset-x-0 bottom-0 z-20 max-w-none border-t border-[#27272A] bg-[#09090B]/85 px-4 py-4 backdrop-blur-xl sm:px-6',
      )}
    >
      <Surface
        className={cn(
          'mx-auto max-w-3xl rounded-2xl bg-[#18181B]/95 px-4 py-3 ring-1 ring-white/[0.03]',
          'focus-within:border-[#3F3F46] focus-within:ring-[#22C55E]/15',
        )}
      >
        <div className="mb-1 flex items-center gap-2 text-xs font-medium text-[#A1A1AA]">
          <span className="flex size-6 items-center justify-center rounded-full border border-[#22C55E]/20 bg-[#22C55E]/10 text-[#22C55E]">
            <Sparkles size={14} />
          </span>
          AI Shopping Assistant
        </div>

        <Textarea
          ref={textareaRef}
          aria-label="Message Namka"
          placeholder="Ask about any product, compare products, or describe what you're looking for..."
          disabled={disabled}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyDown}
        />

        <div className="flex items-center justify-between gap-3 border-t border-[#27272A]/80 pt-3">
          <p className="text-xs text-[#71717A]">
            Compare products, explore variants and discover better alternatives.
          </p>

          <IconButton
            type="submit"
            label="Send message"
            disabled={disabled || !value.trim()}
            className="size-10 border-[#22C55E] bg-[#22C55E] text-[#09090B] hover:border-[#10B981] hover:bg-[#10B981]"
          >
            <SendHorizontal size={18} />
          </IconButton>
        </div>
      </Surface>
    </motion.form>
  )
}

export default ChatInput