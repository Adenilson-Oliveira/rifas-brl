import { styled } from '../../styles'

export const ContainerProduct = styled('div', {
  backgroundColor: '$gray1',
  borderRadius: 10,
  maxWidth: 600,
  margin: '0 auto',
  marginBottom: '1rem',

  '& .content': {
    padding: '0.5rem 1rem',
  },

  '& .diaHorarioRedes': {
    display: 'flex',
    justifyContent: 'space-between',
  },

  p: {
    display: 'flex',
    alignItems: 'center',
  },

  '& .redesSociais': {
    fontSize: 22,
    lineHeight: 0,

    svg: {
      fontSize: 20,
      borderRadius: 6,
      width: '2rem',
      height: '2rem',
      padding: 5,
      color: '$gray1',
    },

    '& :first-child': {
      margin: '0 0.8rem',
      background: '#0088CC',
    },

    '& :last-child': {
      background: '$green-light',
    },
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
