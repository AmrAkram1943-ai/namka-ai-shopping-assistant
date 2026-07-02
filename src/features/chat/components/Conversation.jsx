import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import EmptyConversation from './EmptyConversation'
import MessageBubble from './MessageBubble'
import TypingIndicator from './TypingIndicator'

function Conversation({ messages, isLoading, onAction }) {
  const bottomRef = useRef(null)

useEffect(() => {
  window.requestAnimationFrame(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
  })
}, [messages, isLoading])

  if (!messages.length && !isLoading) {
    return <EmptyConversation />
  }

  return (
    <motion.section
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 pb-64 pt-6"
    >
      <AnimatePresence initial={false}>
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            onAction={onAction}
          />
        ))}
      </AnimatePresence>

      {isLoading && (
        <div className="mr-auto">
          <TypingIndicator />
        </div>
      )}

      <div ref={bottomRef} />
    </motion.section>
  )
}

export default Conversation