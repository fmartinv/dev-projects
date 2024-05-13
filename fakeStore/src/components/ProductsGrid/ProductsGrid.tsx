import { useEffect, useState } from 'react'
import { Product } from '../../models/product.type'
import { fetchProducts } from '../../utils/helpers.utils'
import ProductCard from '../ProductCard/ProductCard'
import { URL_CONSTANTS } from '../../constants/constants'
import './ProductsGrid.css'

const ProductsGrid = () => {
  const [products, setProducts] = useState<Product[]>([])

  console.log({ products: products })

  useEffect(() => {
    const dataProduct = fetchProducts<Product[]>(
      `${URL_CONSTANTS.PRODUCTS_URL}`
    )
    dataProduct.then(data => setProducts(data))
  }, [])
  return (
    <div className='product-container'>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductsGrid
