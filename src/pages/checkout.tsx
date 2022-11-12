import { ContainerCheckout, ContainerCotas } from '../styles/pages/checkout'

export default function Checkout() {
  const cotas = [1001, 2392, 1384, 2932, 6384, 9001, 2692, 1394, 5732, 7184]

  return (
    <ContainerCheckout>
      <h1>⚡ Cotas Selecionadas</h1>
      <ContainerCotas>
        {cotas.length >= 1 &&
          cotas.map((cota) => (
            <div key={cota} className="cota ativo">
              {cota}
            </div>
          ))}
        <div key={1257} className="cota inativo">
          1257
        </div>
        <div key={2456} className="cota inativo">
          2456
        </div>
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
