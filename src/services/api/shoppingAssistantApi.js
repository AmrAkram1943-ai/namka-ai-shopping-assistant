import { apiClient } from './client'

const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL
const sessionStorageKey = 'shopping-assistant-session-id'
const fallbackMessage = 'I could not complete that search right now. Please try again in a moment.'
let inMemorySessionId = ''

function createSessionId() {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID()
  }

  return `session-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function getSessionId() {
  try {
    const existingSessionId = window.localStorage.getItem(sessionStorageKey)

    if (existingSessionId) {
      return existingSessionId
    }

    const sessionId = createSessionId()
    window.localStorage.setItem(sessionStorageKey, sessionId)
    return sessionId
  } catch {
    if (!inMemorySessionId) {
      inMemorySessionId = createSessionId()
    }

    return inMemorySessionId
  }
}

function normalizePrice(price) {
  if (!price || typeof price !== 'object') {
    return null
  }

  return {
    min: price.min ?? null,
    max: price.max ?? null,
    currency: price.currency || '',
  }
}

function normalizeProduct(product, index) {
  const hasAvailableVariant = Array.isArray(product?.variants)
    ? product.variants.some((variant) => variant.in_stock)
    : false

  return {
    id: product?.id || `product-${index}`,

    type: product?.type || '',

    name: product?.name || '',

    brand: product?.brand || '',

    collection: product?.collection || '',

    description: product?.description || '',

    price: normalizePrice(product?.price_summary),

    availability: hasAvailableVariant ? 'In Stock' : 'Out of Stock',

    imageUrl:
      product?.images?.[0] ||
      product?.image ||
      product?.imageUrl ||
      '',

    url:
      product?.product_url ||
      product?.url ||
      '',

    variants: product?.variants || [],

    specifications: product?.specifications || {},

    metadata: product?.metadata || {},
  }
}

function normalizeAction(action, index) {
  return {
    id: action?.id || `action-${index}`,
    label: action?.label || '',
    icon: action?.icon || '',
    variant: action?.variant === 'primary' ? 'primary' : 'secondary',
  }
}

function normalizeAssistantResponse(data) {
  if (!data || typeof data !== 'object' || data.success === false) {
    throw new Error('Invalid assistant response')
  }

  return {
    message: data.message || data.answer || data.response || fallbackMessage,
    products: Array.isArray(data.products)
      ? data.products.map(normalizeProduct)
      : [],
    actions: Array.isArray(data.actions)
      ? data.actions
          .map(normalizeAction)
          .filter((action) => action.label)
      : [],
    metadata:
      data.metadata && typeof data.metadata === 'object'
        ? data.metadata
        : {},
  }
}

export async function askShoppingAssistant(message) {
  if (!webhookUrl) {
    throw new Error('Missing VITE_N8N_WEBHOOK_URL')
  }

  try {
    const { data } = await apiClient.post(webhookUrl, {
      message,
      sessionId: getSessionId(),
    })

    console.log('Webhook Response:', data)

    return normalizeAssistantResponse(data)
  } catch (error) {
    console.error('Shopping Assistant Error:', error)

    if (error.response) {
      console.error('Status:', error.response.status)
      console.error('Response:', error.response.data)
    }

    throw error
  }
}