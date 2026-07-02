import { ExternalLink, PackageSearch } from 'lucide-react'
import { useState } from 'react'
import Button from '../../../common/ui/Button'
import Surface from '../../../common/ui/Surface'
import { cn } from '../../../utils/cn'
import {
  formatProductPrice,
  getProductField,
  getProductUrl,
} from '../utils/productFormatters'
import ProductMeta from './ProductMeta'

function ProductCard({ product }) {
  const [hasImageError, setHasImageError] = useState(false)

  const productUrl = getProductUrl(product)
  const hasProductUrl = Boolean(productUrl)

  function openProduct() {
    if (!hasProductUrl) return

    window.open(productUrl, '_blank', 'noopener,noreferrer')
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openProduct()
    }
  }

  return (
    <Surface
      aria-label={hasProductUrl ? `Open ${getProductField(product?.name, 'product')}` : undefined}
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-xl',
        hasProductUrl &&
          'cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:border-[#3F3F46]',
      )}
      onClick={openProduct}
      onKeyDown={hasProductUrl ? handleKeyDown : undefined}
      role={hasProductUrl ? 'link' : undefined}
      tabIndex={hasProductUrl ? 0 : undefined}
    >
      <div className="flex aspect-[4/3] items-center justify-center border-b border-[#27272A] bg-[#111113]">
        {product?.imageUrl && !hasImageError ? (
          <img
            src={product.imageUrl}
            alt={getProductField(product?.name, 'Product image')}
            className="h-full w-full object-cover"
            onError={() => setHasImageError(true)}
          />
        ) : (
          <div className="flex size-20 items-center justify-center rounded-2xl border border-[#27272A] bg-[#18181B] text-[#22C55E]">
            <PackageSearch size={34} strokeWidth={1.7} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">

        <div>
          <p
            dir="auto"
            style={{ unicodeBidi: 'plaintext' }}
            className="text-sm text-[#A1A1AA]"
          >
            {getProductField(product?.brand, 'Brand')}
          </p>

          <h3
            dir="auto"
            style={{ unicodeBidi: 'plaintext' }}
            className="mt-2 min-h-[84px] line-clamp-3 text-lg font-semibold leading-7 text-[#FAFAFA]"
          >
            {getProductField(product?.name, 'Unnamed product')}
          </h3>

          <p
            dir="ltr"
            className="mt-3 text-xl font-bold text-[#22C55E]"
          >
            {formatProductPrice(product?.price)}
          </p>
        </div>

        <p
          dir="auto"
          style={{ unicodeBidi: 'plaintext' }}
          className="mt-5 min-h-[96px] line-clamp-4 text-sm leading-7 text-[#A1A1AA]"
        >
          {getProductField(product?.description, 'No description available.')}
        </p>

        <div className="mt-6">
          <ProductMeta
            availability={product?.availability}
            collection={product?.collection}
            type={product?.type}
          />
        </div>

        <Button
          as={hasProductUrl ? 'a' : 'button'}
          className="mt-8 w-full"
          disabled={!hasProductUrl}
          href={hasProductUrl ? productUrl : undefined}
          onClick={(event) => event.stopPropagation()}
          rel={hasProductUrl ? 'noreferrer' : undefined}
          target={hasProductUrl ? '_blank' : undefined}
          variant="secondary"
        >
          عرض المنتج
          <ExternalLink size={16} />
        </Button>
      </div>
    </Surface>
  )
}

export default ProductCard