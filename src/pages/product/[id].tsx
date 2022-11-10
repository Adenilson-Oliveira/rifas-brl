import { PageNotFoundError } from 'next/dist/shared/lib/utils'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import ProductCard from '../../components/product'
import { SorteiosContext } from '../../contexts/SorteiosContext'

export default function Product() {
  const router = useRouter()
  const sorteios = useContext(SorteiosContext)
  const { id } = router.query

  if (id === undefined) {
    return PageNotFoundError
  }

  const product = sorteios.ativos.find((el) => el.id === id)

  if (product === undefined) {
    return PageNotFoundError
  }

  return (
    <div>
      <ProductCard
        imgUrl={product.img}
        name={product.name}
        price={product.unityPrice}
        variant={true}
        data={product.data}
      />
    </div>
  )
}
