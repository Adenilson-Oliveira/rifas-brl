import { styled } from '..'

export const ContainerPage404 = styled('div', {
  // margin: '1rem auto',
  // width: '80%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  h1: { fontSize: '1rem' },
  svg: {
    marginBottom: '1rem',
  },

  '& .link': {
    marginTop: '2rem',
    textDecoration: 'none',
    color: '$green',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
})
