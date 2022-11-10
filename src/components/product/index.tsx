import Image from 'next/image'
import { ContainerProduct } from './style'

export interface ProductCardProps {
  imgUrl: string
  name: string
  price: number
  variant: boolean
  data: {
    dia: string
    hora: string
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
            <p>
              Sorteio dia
              <span>
                <strong>
                  {' '}
                  {data.dia} às {data.hora}
                </strong>
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
