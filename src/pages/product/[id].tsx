import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { setCookie } from 'nookies'
// import { parseCookies } from 'nookies'
// import { PageNotFoundError } from 'next/dist/shared/lib/utils'
// import { useRouter } from 'next/router'
import { FormEvent, useContext, useState } from 'react'
// import { useForm } from 'react-hook-form'
import Stripe from 'stripe'
import Footer from '../../components/footer'
import NavBar from '../../components/navbar'
import ProductCard from '../../components/productCard'
import { ToggleMenuContext } from '../../contexts/MenuNavigation'
import { api } from '../../lib/axios'
// import { api } from '../../lib/axios'
import { stripe } from '../../lib/stripe'
import { ContainerProduct, SelectQtde } from '../../styles/pages/product'

interface ProductProps {
  product: {
    name: string
    price: string
    id: string
    imgUrl: string
    data: any
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {

  const [valueQtde, setValueQtde] = useState<number>(1)
  const router = useRouter()


  const { activeNavBar } = useContext(ToggleMenuContext)
  if (activeNavBar) {
    return <NavBar></NavBar>
  }

  // const { register, handleSubmit, watch, formState: { errors } } = useForm() 


  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    console.log(valueQtde)
    const qtde = valueQtde.toString()

    // guadar tanto o nome da tabela que é pra consultar quanto a qtde nos cookies para acessar no SSR de checkout
    setCookie(undefined, 'rifas-br-v1.qtde', qtde)

    setCookie(undefined, 'rifas-br-v1.database', product.data.database)

    setCookie(undefined, 'rifas-br-v1.product-price-id', product.defaultPriceId)

    router.push('/checkout')
  }

  function handleChangeValue(event) {
    setValueQtde(parseInt(event.target.value))
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

      <form onSubmit={handleSubmit}>
        <SelectQtde>
          <p className="subTitle">Selecione a quantidade de números</p>

          <div>
            <div className="popular" onClick={() => setValueQtde((prev) => prev + 5)}>
              <span>+05</span>
              <p>Selecionar</p>
            </div>
            <div onClick={() => setValueQtde((prev) => prev + 10)}>
              <span>+10</span>
              <p>Selecionar</p>
            </div>
            <div onClick={() => setValueQtde((prev) => prev + 25)}>
              <span>+25</span>
              <p>Selecionar</p>
            </div>
            <div onClick={() => setValueQtde((prev) => prev + 50)}>
              <span>+50</span>
              <p>Selecionar</p>
            </div>
          </div>
          <input type="number" value={valueQtde} onChange={handleChangeValue} min={1} max={100} required />
        </SelectQtde>

        <button type="submit">Selecionar Cotas</button>
      </form>

      <Footer />
    </ContainerProduct>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const { 'rifas-br-v1.token': token } = parseCookies(ctx)
  const token = ctx.req.cookies['rifas-br-v1.token']
  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  // o parametro id pode vir uma string ou um array de string 
  const productId = typeof ctx.params.id === 'string' ? ctx.params.id : ctx.params.id[0]

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  // verificar se é válido se não for redirecionar o user para a tela de login

  const price = product.default_price as Stripe.Price
  const data = product.metadata

  console.log(price)
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
        defaultPriceId: price.id,
      },
    },
  }
}
