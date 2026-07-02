import { useCallback, useMemo, useState } from 'react'
import { askShoppingAssistant } from '../../services/api/shoppingAssistantApi'

function createMessage(role, content, options = {}) {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    role,
    content,
    products: options.products || [],
    actions: options.actions || [],
    metadata: options.metadata || {},
  }
}

export function useChat() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const hasStarted = messages.length > 0 || isLoading

  const submitMessage = useCallback(async (value) => {
    const query = value.trim()

    if (!query || isLoading) {
      return
    }

    setError('')
    setMessages((current) => [...current, createMessage('user', query)])
    setIsLoading(true)

    try {
      const response = await askShoppingAssistant(query)
      setMessages((current) => [
        ...current,
        createMessage('assistant', response.message, {
          products: response.products,
          actions: response.actions,
          metadata: response.metadata,
        }),
      ])
    } catch {
      setError('The assistant is unavailable right now. Please try again.')
      setMessages((current) => [
        ...current,
        createMessage(
          'assistant',
          'I could not complete that search right now. Please try again in a moment.',
        ),
      ])
    } finally {
      setIsLoading(false)
    }
  }, [isLoading])

  return useMemo(
    () => ({
      messages,
      isLoading,
      error,
      hasStarted,
      submitMessage,
    }),
    [messages, isLoading, error, hasStarted, submitMessage],
  )
}
