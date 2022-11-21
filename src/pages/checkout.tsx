import { Prisma, PrismaClient, RifaIFhone, User } from '@prisma/client'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { useContext, useState } from 'react'
import { PrimaryExpression } from 'typescript'
import NavBar from '../components/navbar'
import { ToggleMenuContext } from '../contexts/MenuNavigation'
import { api } from '../lib/axios'
import { prisma } from '../server/prisma/prisma'
import { ContainerCheckout, ContainerCotas } from '../styles/pages/checkout'


// type cotasType = {
//   id: string
//   cota: string
//   status: string
//   user?: string
//   user_id?: string
// }

// interface CkeckoutProps {
//   cotas: cotasType[]
// }



export default function Checkout(props) {
  const { activeNavBar } = useContext(ToggleMenuContext)

  const [cotas, setCotas] = useState({
    ativas: props.cotas,
    inativas: []
  })




  if (activeNavBar) {
    return <NavBar></NavBar>
  }

  function handleDisableCota(id: string) {

    if (cotas.ativas.length > 1) {

      const cotasAtivas = cotas.ativas.filter((cota) => cota.id !== id)

      let cotasInativas = cotas.inativas
      const changeCota = cotas.ativas.filter((cota) => cota.id === id)

      if (cotasInativas.length === 0) {
        cotasInativas = changeCota
      } else {
        cotasInativas.push(changeCota[0])

      }

      setCotas({
        ativas: cotasAtivas,
        inativas: cotasInativas
      })

    } else {
      return
    }
  }

  function handleEnableCota(id: string) {


    const cotasInativas = cotas.inativas.filter((cota) => cota.id !== id)

    let cotasAtivas = cotas.ativas
    const changeCota = cotas.inativas.filter((cota) => cota.id === id)

    cotasAtivas.push(changeCota[0])

    setCotas({
      ativas: cotasAtivas,
      inativas: cotasInativas
    })

  }

  return (
    <ContainerCheckout>
      <h1>⚡ Cotas Selecionadas</h1>
      <ContainerCotas>
        {cotas.ativas && cotas.ativas.length >= 1 &&
          cotas.ativas.map((cota) => (
            <div onClick={() => handleDisableCota(cota.id)} key={cota.id} className="cota ativo">
              {cota.cota}
            </div>
          ))}

        {cotas.inativas && cotas.inativas.length >= 1 &&
          cotas.inativas.map((cota) => (
            <div onClick={() => handleEnableCota(cota.id)} key={cota.id} className="cota inativo">
              {cota.cota}
            </div>
          ))}


      </ContainerCotas>

      <button>Comprar</button>
      <p>
        POR APENAS <span>R$ 8,50</span>
      </p>

      <ul>
        <li>
          Voçê pode remover a seleção de algumas cotas clicando em cima delas
        </li>
        <li>
          O sorteio ocorrerá no dia: <strong>30/11/22 ás 20h00</strong>
        </li>
      </ul>
    </ContainerCheckout>
  )
}


