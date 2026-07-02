import Chip from '../../../common/ui/Chip'
import { suggestedSearches } from '../../../data/suggestedSearches'

function SuggestedSearches({ onSelect, disabled }) {
  if (!suggestedSearches.length) {
    return null
  }

  return (
    <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2">
      {suggestedSearches.map((search) => (
        <Chip
          key={search}
          disabled={disabled}
          onClick={() => onSelect(search)}
        >
          {search}
        </Chip>
      ))}
    </div>
  )
}

export default SuggestedSearches