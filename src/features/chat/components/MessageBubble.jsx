import { motion } from 'framer-motion'
import Surface from '../../../common/ui/Surface'
import ProductGrid from '../../products/components/ProductGrid'
import { getMessageLabel } from '../utils/messageFormatters'
import MessageActions from './MessageActions'

function MessageBubble({ message, onAction }) {
  const isUser = message.role === 'user'

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className={isUser ? 'ml-auto max-w-2xl' : 'mr-auto w-full max-w-4xl'}
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
    >
      <p className="mb-2 text-xs font-medium uppercase tracking-[0.12em] text-[#71717A]">
        {getMessageLabel(message.role)}
      </p>

      <Surface
        className={
          isUser
            ? 'rounded-2xl rounded-tr-sm border-[#22C55E]/20 bg-[#22C55E]/10 px-5 py-4'
            : 'rounded-2xl rounded-tl-sm px-5 py-4'
        }
      >
        <p
  dir="auto"
  style={{
    unicodeBidi: 'plaintext',
    textAlign: 'start',
  }}
  className="whitespace-pre-wrap break-words text-sm leading-7 text-[#FAFAFA] sm:text-base"
>
  {message.content}
</p>
      </Surface>

      {!isUser && (
        <MessageActions
          actions={message.actions}
          onAction={onAction}
        />
      )}

      {!isUser && (
        <ProductGrid
          products={message.products}
        />
      )}
    </motion.div>
  )
}

export default MessageBubble