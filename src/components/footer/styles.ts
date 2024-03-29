import { styled } from '../../styles'

export const ContainerFooter = styled('footer', {
  // position: 'fixed',
  // bottom: 0,
  // left: 0,

  position: 'absolute',
  left: 0,

  display: 'flex',
  flexDirection: 'column',
  width: 'calc(100% )',
  margin: '0 auto',
  height: '120px',
  // marginTop: '1rem',

  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: '$gray8',

  'div img': {
    marginTop: '1.5rem',
  },

  '& .RefKaizen': {
    fontFamily: 'Baloo 2',
    fontWeight: 500,
    width: '100%',
    height: '30px',
    backgroundColor: '$navigation',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    span: {
      color: '$green',
    },
  },
})

// export const RefKaizen = styled('div', {
//   fontFamily: 'Baloo 2',
//   fontWeight: 500,
//   width: '100%',
//   height: '30px',
//   backgroundColor: '$navigation',

//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',

//   span: {
//     color: '$green',
//   },
// })
