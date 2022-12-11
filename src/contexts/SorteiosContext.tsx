import { createContext, ReactNode, useState } from 'react'

interface SorteiosContextProviderProps {
  children: ReactNode
}

type sorteio = {
  id: string
  imgUrl: string
  unityPrice: string
  name: string
  variant: boolean
  data: {
    data_sorteio: string
    horario_sorteio: string
  }
}

interface SorteiosContextType {
  ativos: sorteio[]
  concluidos: sorteio[]
  emBreve: sorteio[]
}

export const SorteiosContext = createContext({} as SorteiosContextType)

export function SorteiosContextProvider({
  children,
}: SorteiosContextProviderProps) {
  const [sorteios] = useState<SorteiosContextType>({
    ativos: [
      {
        id: '1',
        imgUrl: '/img/sorteios/ifhone.png',
        name: 'I FHONE 8 PLUS',
        unityPrice: 'R$ 1,99',
        variant: false,
        data: {
          data_sorteio: '30/12/22',
          horario_sorteio: '8H00'
        }
      }

    ],


    concluidos: [],

    emBreve: [],
  })
  return (
    <SorteiosContext.Provider value={sorteios}>
      {children}
    </SorteiosContext.Provider>
  )
}
