import ProductCard, { ProductCardProps } from '../components/product'

// eslint-disable-next-line prettier/prettier
interface ProductProps extends ProductCardProps { }

export default function Product(product: ProductProps) {
  return (
    <div>
      <ProductCard
        imgUrl=""
        name=""
        price={0.85}
        variant={true}
        data={product.data}
      />
    </div>
  )
}
