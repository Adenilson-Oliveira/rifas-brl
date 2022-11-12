import { styled } from '..'

export const ContainerSuccess = styled('main', {
  maxWidth: 600,
  margin: '0 auto',
})

export const SmallProductCard = styled('div', {
  backgroundColor: '$white',
  marginBottom: '1rem',
  borderRadius: 10,
  padding: '.5rem',

  display: 'flex',
  img: {
    objectFit: 'cover',
    borderRadius: 10,
    marginRight: '1rem',
  },

  '& .content': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
})

export const BuyDetails = styled('div', {
  backgroundColor: '$white',
  borderRadius: 10,
  padding: '.5rem 1rem',

  ul: {
    marginTop: '1rem',
  },

  'ul li': {
    // borderRadius: 10,
    listStyle: 'none',
    border: '1px solid $white',
    borderBottomColor: '$gray3',
    padding: '.2rem 0',
  },

  '& .idDaCompra': {
    fontSize: '$subText',
    color: '$gray5',
  },
})
