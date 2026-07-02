import { DynamicIcon, iconNames } from 'lucide-react/dynamic'
import Button from '../../../common/ui/Button'

function toKebabCase(value) {
  return String(value || '')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[_\s]+/g, '-')
    .toLowerCase()
}

function getActionIconName(iconName) {
  const normalizedName = toKebabCase(iconName)
  return iconNames.includes(normalizedName) ? normalizedName : ''
}

function MessageActions({ actions = [], onAction }) {
  if (!actions.length) {
    return null
  }

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {actions.map((action) => {
        const iconName = getActionIconName(action.icon)

        return (
          <Button
            key={action.id}
            variant={action.variant}
            onClick={() => onAction?.(action)}
          >
            {iconName && <DynamicIcon name={iconName} size={16} />}
            {action.label}
          </Button>
        )
      })}
    </div>
  )
}

export default MessageActions