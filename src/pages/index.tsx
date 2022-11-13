import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
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
    price: string
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

      {products.map((sorteio) => {
        return (
          <Link href={`/product/${sorteio.id}`} key={sorteio.id}>
            <ProductCard
              imgUrl={sorteio.imgUrl}
              name={sorteio.name}
              price={sorteio.price}
              variant={false}
              data={sorteio.data}
            />
          </Link>
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

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    const data = product.metadata
    return {
      id: product.id,
      name: product.name,
      imgUrl: product.images[0],
      data,

      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    }
  })

  // console.log(products)
  // console.log(response)

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 horas no cache
  }
}
