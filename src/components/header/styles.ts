import { styled } from '../../styles'

export const ContainerHeader = styled('header', {
  backgroundColor: '$navigation',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 1rem',
  height: 70,

  svg: {
    color: '$white',
    lineHeight: 0,
    backgroundColor: '$navigation',
    fontSize: 30,
  },

  '&:before': {
    content: '',
    width: '100vw',
    height: 30,
    backgroundColor: '$green',
    position: 'absolute',
    top: 70,
    left: 0,
  },
})
