import { AnimatePresence, motion } from 'framer-motion'
import ChatExperience from '../../chat/components/ChatExperience'
import ChatInput from '../../chat/components/ChatInput'
import SuggestedSearches from '../../chat/components/SuggestedSearches'
import Hero from './Hero'

function Landing({ chat }) {
  return (
    <>
      <Hero compact={chat.hasStarted} />

      {!chat.hasStarted && (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.35, delay: 0.1 }}
        >
          <ChatInput disabled={chat.isLoading} onSubmit={chat.submitMessage} />
          <SuggestedSearches disabled={chat.isLoading} onSelect={chat.submitMessage} />
        </motion.div>
      )}

      <AnimatePresence>
        {chat.hasStarted && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-1 flex-col"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3 }}
          >
            <ChatExperience isLoading={chat.isLoading} messages={chat.messages} />
            <ChatInput disabled={chat.isLoading} isDocked onSubmit={chat.submitMessage} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Landing
