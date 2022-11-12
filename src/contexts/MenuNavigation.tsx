import { createContext, ReactNode, useState } from 'react'

interface MenuNavigationProps {
  children: ReactNode
}

interface MenuContexttype {
  activeNavBar: boolean
  setActiveNavBar: (a: boolean) => void
}

export const ToggleMenuContext = createContext({} as MenuContexttype)

export function MenuNavigationProvider({ children }: MenuNavigationProps) {
  const [activeNavBar, setActiveNavBar] = useState<boolean>(false)

  return (
    <ToggleMenuContext.Provider value={{ activeNavBar, setActiveNavBar }}>
      {children}
    </ToggleMenuContext.Provider>
  )
}
