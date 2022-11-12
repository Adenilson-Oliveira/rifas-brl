import { styled } from '..'

export const ContainerCheckout = styled('main', {
  maxWidth: 600,
  margin: '0 auto',

  button: {
    maxWidth: 600,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '100%',
    marginTop: '1rem',
    borderRadius: 10,
    border: '1px solid $green',
    backgroundColor: '$green',
    fontWeight: 'bold',
    fontSize: '$subTitle',
    color: '$white',
    marginBottom: '1rem',

    '&:hover': {
      transition: '1.5sms',
      backgroundColor: '$green-light',
      borderColor: '$green-light',
    },
  },

  'p, ul, li': {
    marginLeft: '1rem',
    marginBottom: '2rem',
  },

  li: {
    marginBottom: '1rem',
  },

  span: {
    backgroundColor: '$gray9',
    color: '$gray1',
    padding: '.2rem .5rem',
    borderRadius: 6,
  },
})

export const ContainerCotas = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  padding: '2rem 0 1rem  0',
  justifyContent: 'center',

  '& .cota': {
    padding: '.25rem .5rem',
    margin: '.25rem .5rem',
    fontFamily: 'monospace',
    fontSize: '1.4rem',
    cursor: 'pointer',
    borderRadius: 10,
  },

  '& .ativo': {
    background: '$green-light',
  },

  '& .inativo': {
    background: '$green',
    opacity: 0.5,
  },
})
