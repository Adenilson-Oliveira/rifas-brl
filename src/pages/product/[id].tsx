import { PageNotFoundError } from 'next/dist/shared/lib/utils'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import ProductCard from '../../components/productCard'
import { SorteiosContext } from '../../contexts/SorteiosContext'
import { ContainerProduct, SelectQtde } from '../../styles/pages/product'

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
    <ContainerProduct>
      <ProductCard
        imgUrl={product.img}
        name={product.name}
        price={product.unityPrice}
        variant={true}
        data={product.data}
      />
      <div className="title">
        <h1>⚡ Cotas</h1>
        <span>Escolha sua sorte</span>
      </div>

      <form>
        <SelectQtde>
          <p className="subTitle">Selecione a quantidade de números</p>

          <div>
            <div>
              <span>+05</span>
              <p>Selecionar</p>
            </div>
            <div>
              <span>+10</span>
              <p>Selecionar</p>
            </div>
            <div className="popular">
              <span>+25</span>
              <p>Selecionar</p>
            </div>
            <div>
              <span>+50</span>
              <p>Selecionar</p>
            </div>
          </div>
          <input type="number" />
        </SelectQtde>

        <button type="submit">Selecionar Cotas</button>
      </form>
    </ContainerProduct>
  )
}
