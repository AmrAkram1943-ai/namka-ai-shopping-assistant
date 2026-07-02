import StatusBadge from '../../../common/ui/StatusBadge'

function normalizeAvailability(value) {
  if (value === true) return 'متوفر'
  if (value === false) return 'غير متوفر'

  const text = String(value || '').toLowerCase()

  if (text.includes('in stock')) return 'متوفر'
  if (text.includes('out of stock')) return 'غير متوفر'

  return null
}

function ProductMeta({ availability, collection, type }) {
  const availabilityLabel = normalizeAvailability(availability)

  return (
    <div className="flex flex-wrap gap-2">
      {availabilityLabel && (
        <StatusBadge tone={availabilityLabel === 'متوفر' ? 'success' : 'neutral'}>
          {availabilityLabel}
        </StatusBadge>
      )}

      {collection && (
        <StatusBadge>
          {collection}
        </StatusBadge>
      )}

      {type && type !== 'n/a' && type !== 'Type n/a' && (
        <StatusBadge>
          {type}
        </StatusBadge>
      )}
    </div>
  )
}

export default ProductMeta