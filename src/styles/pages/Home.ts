import { styled } from '..'

export const ContainerHome = styled('main', {
  height: '150vh',

  '& .titlePage': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export const ContainerProduct = styled('div', {
  backgroundColor: '$gray1',
  borderRadius: 10,
  maxWidth: 600,
  margin: '0 auto',
  marginBottom: '1rem',

  '& .content': {
    padding: '0.5rem 1rem',
  },

  '& .chamadaParaAcao': {
    backgroundColor: '$green',
    fontWeight: 'bold',
    // width: 'auto',
    color: '$white',
    padding: '2px 1rem',
    borderRadius: 6,
  },

  img: {
    width: '100%',
    objectFit: 'cover',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
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
