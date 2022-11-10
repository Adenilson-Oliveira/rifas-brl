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
