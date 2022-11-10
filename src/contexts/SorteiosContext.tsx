import { createContext, ReactNode, useState } from 'react'

interface SorteiosContextProviderProps {
  children: ReactNode
}

type sorteio = {
  id: string
  img: string
  unityPrice: number
  name: string
  data: {
    dia: string
    hora: string
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
        img: '/img/sorteios/xre.svg',
        unityPrice: 0.85,
        name: 'XRE 300 OU 15K',
        data: {
          dia: '30/11/22',
          hora: '8h00',
        },
      },
      {
        id: '2',
        img: '/img/sorteios/saveiro.svg',
        unityPrice: 2.5,
        name: 'SAVEIRO SURF',
        data: {
          dia: '22/12/22',
          hora: '8h00',
        },
      },
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
