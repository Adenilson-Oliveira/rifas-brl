import { GetServerSideProps } from 'next'
import Image from 'next/image'
import {
  BuyDetails,
  ContainerSuccess,
  SmallProductCard,
} from '../styles/pages/success'

export default function Success() {
  return (
    <ContainerSuccess>
      <h1>Pagamento finalizado</h1>

      <SmallProductCard>
        <Image src="/img/sorteios/xre.svg" alt="" width={100} height={100} />
        <div className="content">
          <h2>XRE 300 OU 15K</h2>
          <p>POR APENAS R$ 0,85</p>
          <span>Adquira já!</span>
        </div>
      </SmallProductCard>

      <BuyDetails>
        <p>Detalhes da sua compra</p>
        <p className="idDaCompra">7665d4aa4dfag5afgar5r</p>

        <ul>
          <li>
            <span>Comprador:</span> Adenilson Nogueira Oliveira
          </li>
          <li>
            <span>CPF:</span> 139 **********
          </li>
          <li>
            <span>Telefone:</span> (38) ********
          </li>
          <li>
            <span>Data/horário:</span> 29/10/2022 às 16h44
          </li>
          <li>
            <span>Situação:</span> Aguardando Confirmação
          </li>
          <li>
            <span>Total:</span> R$ 8,50
          </li>
          <li>
            <span>Cotas:</span> 1001, 2392, 1384, 2932, 6384, 9001, 2692, 1394,
            5732, 7184
          </li>
        </ul>
      </BuyDetails>

      <p>Problemas com sua compra? clique aqui.</p>
    </ContainerSuccess>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {


  const urlReq = req
  console.log(urlReq)

  const urlParams = req.headers.params
  console.log(urlParams)

  return {
    props: {

    }
  }
}