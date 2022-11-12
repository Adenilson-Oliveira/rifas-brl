import Image from 'next/image'
import { useContext } from 'react'
import NavBar from '../components/navbar'
// import Link from 'next/link'
import ProductCard from '../components/productCard'
import { ToggleMenuContext } from '../contexts/MenuNavigation'
import { SorteiosContext } from '../contexts/SorteiosContext'
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

export default function Home() {
  const sorteios = useContext(SorteiosContext)
  console.log(sorteios)

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
      {sorteios.ativos.map((premio) => {
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
    </ContainerHome>
  )
}
