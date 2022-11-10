import Image from 'next/image'
import {
  ContainerEtapa,
  ContainerHome,
  ContainerProduct,
} from '../styles/pages/home'

const sorteios = [
  {
    img: '/img/sorteios/xre.svg',
    unityPrice: 0.85,
    name: 'XRE 300 OU 15K',
  },
  {
    img: '/img/sorteios/saveiro.svg',
    unityPrice: 2.5,
    name: 'SAVEIRO SURF',
  },
]

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
  return (
    <ContainerHome>
      <div className="titlePage">
        <h1>⚡ Prêmios</h1>
        <span>Escolha sua sorte</span>
      </div>

      {sorteios.map((premio) => {
        return (
          <ContainerProduct key={premio.img}>
            <Image src={premio.img} alt="" width={366} height={290} />
            <div className="content">
              <h2>{premio.name}</h2>
              <p>
                POR APENAS <span>0,85</span>
              </p>
              <span className="chamadaParaAcao">Adquira já!</span>
            </div>
          </ContainerProduct>
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
