import { Product } from '../../models/product.type'
import './ProductCard.css'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, image, title, price, rating, category, description } = product
  console.log(description.length)
  return (
    <div className='card' key={id}>
      <img className='card-img-top' src={image} alt={title} />
      <div className='card-body'>
        <p className='card-text'>{title}</p>
        <p className='card-text'>{price}$</p>
        <p className='card-text'>{rating.rate}</p>
        <p className='card-text'>{category}</p>
        <p className='card-text card-description'>{description}</p>
      </div>
    </div>
  )
}

export default ProductCard
