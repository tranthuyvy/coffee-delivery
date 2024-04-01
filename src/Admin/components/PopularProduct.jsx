import { Link } from "react-router-dom"
import { popularProducts } from "../../apis/mock-data"

const PopularProduct = () => {
  return (
    <div className="flex-[0.4] bg-white p-4 rounded-md border border-gray-200">
      <strong className="text-sub font-medium">Popular Products</strong>
      <div className="mt-4 flex flex-col gap-3">
        {popularProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="flex items-start hover:no-underline"
          >
            <div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
              <img
                className="w-full h-full object-cover rounded-sm"
                src={product.product_thumbnail}
                alt={product.product_name}
              />
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm text-gray-800">{product.product_name}</p>
              <span
                className={
                  `${product.product_stock} === 0
										? 'text-red-500'
										: ${product.product_stock} > 50
										? 'text-green-500'
										: 'text-orange-500',
									'text-xs font-medium'`
                }
              >
                {product.product_stock === 0 ? 'Out of Stock' : product.product_stock + ' in Stock'}
              </span>
            </div>
            <div className="text-xs text-gray-400 pl-1.5">{product.product_price}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PopularProduct
