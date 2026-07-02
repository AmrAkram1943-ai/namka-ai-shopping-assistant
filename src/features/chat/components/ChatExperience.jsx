import Conversation from './Conversation'

function ChatExperience({ isLoading, messages }) {
  return <Conversation isLoading={isLoading} messages={messages} />
}

export default ChatExperience
