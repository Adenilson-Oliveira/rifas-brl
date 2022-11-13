import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { useContext } from 'react'
import Stripe from 'stripe'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
// import Link from 'next/link'
import ProductCard from '../components/productCard'
import { ToggleMenuContext } from '../contexts/MenuNavigation'
// import { SorteiosContext } from '../contexts/SorteiosContext'
import { stripe } from '../lib/stripe'
import { ContainerEtapa, ContainerHome } from '../styles/pages/home'

const etapas = [
  {
    img: '/img/etapa-1.png',
    title: 'Escolha um Sorteio',
    description:
      'É muito fácil participar, comerce escolhendo um sorteio ativo.',
  },
  {
    img: '/img/etapa-2.png',
    title: 'Selecione a quantidade',
    description: 'Escolha quantos quiser! Quanto mais, mais chances de ganhar.',
  },
  {
    img: '/img/etapa-3.png',
    title: 'Faça o pagamento',
    description: 'Cartão ou PIX',
  },
  {
    img: '/img/etapa-4.png',
    title: 'Aguarde o sorteio',
    description:
      'Agora é só aguadar o sorteio pela Loteria Federal e boa sorte!',
  },
]

interface HomeProps {
  products: {
    id: string
    name: string
    imgUrl: string
    price: number
    data: {
      data_sorteio: string
      horario_sorteio: string
    }
  }[]
}

export default function Home({ products }: HomeProps) {
  // const sorteios = useContext(SorteiosContext)
  // console.log(sorteios)

  const { activeNavBar } = useContext(ToggleMenuContext)

  if (activeNavBar) {
    return <NavBar></NavBar>
  }

  return (
    <ContainerHome>
      <div className="titlePage">
        <h1>⚡ Prêmios</h1>
        <span>Escolha sua sorte</span>
      </div>

      {/* <Link href={`/product`} to>Hello World!</Link> */}
      {/* {sorteios.ativos.map((premio) => {
        return (
          <ProductCard
            key={premio.img}
            imgUrl={premio.img}
            name={premio.name}
            price={premio.unityPrice}
            variant={false}
            data={premio.data}
          />
        )
      })} */}

      {products.map((sorteio) => {
        return (
          <ProductCard
            key={sorteio.id}
            imgUrl={sorteio.imgUrl}
            name={sorteio.name}
            price={sorteio.price}
            variant={false}
            data={sorteio.data}
          />
        )
      })}

      {etapas.map((etapa) => {
        return (
          <ContainerEtapa key={etapa.img}>
            <Image src={etapa.img} alt="" width={245} height={245} />
            <div className="content">
              <h2>{etapa.title}</h2>
              <p>{etapa.description}</p>
            </div>
          </ContainerEtapa>
        )
      })}
      <Footer />
    </ContainerHome>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    const data = product.metadata as Stripe.Metadata
    return {
      id: product.id,
      name: product.name,
      imgUrl: product.images[0],
      data,

      price: price.unit_amount,
    }
  })

  console.log(products)
  console.log(response)

  return {
    props: {
      products,
    },
  }
}
