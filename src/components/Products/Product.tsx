import { Product } from "@/db"

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group relative">
      <div
        className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80 lg:aspect-none"
      >
        <img
          src={product.imageId}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />


      </div>
      <div className="mt-4 flex  justify-between">
        <div>

          <h3 className="text-sm text-gray-700">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            SIze {product.size.toUpperCase()} , Color {product.color.toUpperCase()}


          </p>
        </div>
<p className="text-sm text-gray-900 font-medium">
  ${product.price}
</p>
      </div>
    </div>
  )

}

export default ProductCard
