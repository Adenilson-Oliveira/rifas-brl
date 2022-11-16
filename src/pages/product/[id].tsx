import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
// import { PageNotFoundError } from 'next/dist/shared/lib/utils'
// import { useRouter } from 'next/router'
import { useContext } from 'react'
import Stripe from 'stripe'
import Footer from '../../components/footer'
import NavBar from '../../components/navbar'
import ProductCard from '../../components/productCard'
import { ToggleMenuContext } from '../../contexts/MenuNavigation'
import { api } from '../../lib/axios'
import { stripe } from '../../lib/stripe'
import { ContainerProduct, SelectQtde } from '../../styles/pages/product'

interface ProductProps {
  product: {
    name: string
    price: string
    id: string
    imgUrl: string
    data
  }
}

export default function Product({ product }: ProductProps) {
  const { activeNavBar } = useContext(ToggleMenuContext)
  if (activeNavBar) {
    return <NavBar></NavBar>
  }

  return (
    <ContainerProduct>
      <ProductCard
        imgUrl={product.imgUrl}
        name={product.name}
        price={product.price}
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

      <Footer />
    </ContainerProduct>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'rifas-br-v1.token': token } = parseCookies(ctx)

  console.log(ctx.req.cookies)
  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  await api.get('/api/rotateste')

  const productId =
    typeof ctx.params.id === 'string' ? ctx.params.id : ctx.params.id[0]

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  // verificar se está logado se não estiver redirecionar o user para a tela de login

  const price = product.default_price as Stripe.Price
  const data = product.metadata
  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imgUrl: product.images[0],
        data,

        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
      },
    },
  }
}
