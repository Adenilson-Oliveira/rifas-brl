import Image from 'next/image'
import { InstagramLogo, PaperPlaneTilt } from 'phosphor-react'
import { ContainerProduct } from './style'

export interface ProductCardProps {
  imgUrl: string
  name: string
  price: number
  variant: boolean
  data: {
    data_sorteio: string
    horario_sorteio: string
  }
}

export default function Premio({
  imgUrl,
  name,
  price,
  variant,
  data,
}: ProductCardProps) {
  return (
    <ContainerProduct key={imgUrl}>
      <Image src={imgUrl} alt="" width={366} height={290} />
      <div className="content">
        <h2>{name}</h2>
        <p>
          POR APENAS <span>{price}</span>
        </p>
        {variant ? (
          <>
            <p className="diaHorarioRedes">
              <span>
                Sorteio dia
                <strong>
                  {' '}
                  {data.data_sorteio} às {data.horario_sorteio}
                </strong>
              </span>
              <span className="redesSociais">
                <PaperPlaneTilt />
                <InstagramLogo />
              </span>
            </p>
          </>
        ) : (
          <span className="chamadaParaAcao">Adquira já!</span>
        )}
      </div>
    </ContainerProduct>
  )
}
