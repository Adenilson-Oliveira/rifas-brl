import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { setCookie } from 'nookies'
// import { parseCookies } from 'nookies'
// import { PageNotFoundError } from 'next/dist/shared/lib/utils'
// import { useRouter } from 'next/router'
import { FormEvent, useContext, useState } from 'react'
// import { useForm } from 'react-hook-form'
import Footer from '../../components/footer'
import NavBar from '../../components/navbar'
import ProductCard from '../../components/productCard'
import { ToggleMenuContext } from '../../contexts/MenuNavigation'
import { SorteiosContext } from '../../contexts/SorteiosContext'
// import { api } from '../../lib/axios'
import { ContainerProduct, SelectQtde } from '../../styles/pages/product'

// interface ProductProps {
//   product: {
//     name: string
//     price: string
//     id: string
//     imgUrl: string
//     data: any
//     defaultPriceId: string
//   }
// }

// { product }: ProductProps



export default function Product() {

  const sorteios = useContext(SorteiosContext)
  console.log(sorteios)
  const sorteioIfhone = sorteios.ativos[0]

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

    setCookie(undefined, 'rifas-br-v1.database', 'rifaifhone')

    setCookie(undefined, 'rifas-br-v1.product-price-id', '1.99')

    router.push('/checkout')
  }

  function handleChangeValue(event) {
    setValueQtde(parseInt(event.target.value))
  }

  return (
    <ContainerProduct>
      <ProductCard
        imgUrl={sorteioIfhone.imgUrl}
        name={sorteioIfhone.name}
        price={sorteioIfhone.unityPrice}
        variant={true}
        data={sorteioIfhone.data}
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


