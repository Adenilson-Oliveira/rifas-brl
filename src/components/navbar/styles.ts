import { styled } from '../../styles'

export const ContainerBarraDeNavegacao = styled('div', {
  backgroundColor: '$navigation',
  color: '$white',
  margin: '-1rem',
  height: '100%',

  border: '1px solid $navigation',
  borderTopColor: '$gray3',

  '& a': {
    textDecoration: 'none',
    color: '$white',
  },

  '& ul': {
    padding: '3rem 20%',
    listStyle: 'none',

    li: {
      padding: '1rem 1rem',
      fontSize: '$title',
      // border: '1px solid $navigation',
      // borderBottomColor: '$gray3',
    },
  },
})
