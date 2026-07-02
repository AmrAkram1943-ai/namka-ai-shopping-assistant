export function getProductField(value, fallback = 'Not specified') {
  return value || fallback
}

export function formatProductPrice(price) {
  if (!price || typeof price !== 'object') {
    return 'السعر غير متوفر'
  }

  const { min, max, currency } = price

  const minPrice = Number(min)
  const maxPrice = Number(max)

  const hasMinPrice = Number.isFinite(minPrice)
  const hasMaxPrice = Number.isFinite(maxPrice)

  if (!hasMinPrice && !hasMaxPrice) {
    return 'السعر غير متوفر'
  }

  const formatter = new Intl.NumberFormat('en-EG', {
    maximumFractionDigits: 0,
  })

  const currencyLabel = currency || 'EGP'

  if (hasMinPrice && hasMaxPrice && minPrice !== maxPrice) {
    return `${formatter.format(minPrice)} – ${formatter.format(maxPrice)} ${currencyLabel}`
  }

  return `${formatter.format(hasMinPrice ? minPrice : maxPrice)} ${currencyLabel}`
}

export function getProductUrl(product) {
  return product?.product_url || product?.url || ''
}