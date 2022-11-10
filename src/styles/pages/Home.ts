import { styled } from '..'

export const ContainerHome = styled('main', {
  height: '150vh',

  '& .titlePage': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export const ContainerEtapa = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',

  '& .content': {
    padding: '0.5rem 1rem',
  },
})
