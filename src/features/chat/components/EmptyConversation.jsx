import { MessageCircleMore } from 'lucide-react'

function EmptyConversation() {
  return (
    <div className="flex min-h-[16rem] flex-col items-center justify-center text-center">
      <div className="mb-4 flex size-14 items-center justify-center rounded-full border border-[#27272A] bg-[#18181B]">
        <MessageCircleMore size={26} className="text-[#22C55E]" />
      </div>

      <h3 className="text-lg font-semibold text-[#FAFAFA]">
        Start a conversation
      </h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-[#71717A]">
        Search for products, compare models, explore alternatives, or ask about
        specifications.
      </p>
    </div>
  )
}

export default EmptyConversation