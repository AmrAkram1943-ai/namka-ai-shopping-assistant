import ProductCard from './ProductCard'

function ProductGrid({ products = [] }) {
  if (!products.length) {
    return null
  }

  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id || product.name}
          product={product}
        />
      ))}
    </div>
  )
}

export default ProductGrid