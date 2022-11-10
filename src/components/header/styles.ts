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
})

export const ContainerStyleBorder = styled('div', {
  // zIndex: -2,
  position: 'absolute',
  top: 69,
  width: '100vw',
  height: '1rem',
  backgroundColor: '$navigation',

  div: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '$gray4',
    height: '1.1rem',
    width: '100%',
  },
})
