import Image from 'next/image'
import Link from 'next/link'
import { ContainerPage404 } from '../styles/pages/404'

export default function PageNotFound() {
  return (
    <ContainerPage404>
      <h1>Página não encontrada...</h1>
      <Image src="/img/page404.svg" width={315} height={300} alt="" />

      <Link className="link" href={'/'}>
        {' '}
        Voltar ao início
      </Link>
    </ContainerPage404>
  )
}
