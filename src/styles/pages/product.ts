import { styled } from '..'

export const ContainerProduct = styled('div', {
  '& .title': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 600,
    margin: '0 auto',
  },

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

    marginBottom: '4rem',
    '&:hover': {
      transition: '1.5sms',
      backgroundColor: '$green-light',
      borderColor: '$green-light',
    },
  },
})

export const SelectQtde = styled('section', {
  backgroundColor: '$gray1',
  padding: '1rem 2rem',
  borderRadius: 10,
  textAlign: 'center',
  maxWidth: 600,
  margin: '0 auto',

  '& .subTitle': {
    marginBottom: '2rem',
  },

  'div div': {
    backgroundColor: '$gray3',
    width: 'calc( 50% - 1rem)',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '0.5rem 0',
    gap: 0,
    borderRadius: 10,

    span: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.6,
      // marginTop: 2,
    },

    p: {
      color: '$gray5',
    },
  },

  div: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  '& .popular': {
    position: 'relative',
    border: '1px solid $green',
  },

  '& .popular:before': {
    content: 'Mais popular',
    display: 'block',
    position: 'absolute',
    color: '$gray1',

    top: '-12%',
    left: '10%',
    width: '80%',
    // position: 'inherit',
    fontSize: 14,

    backgroundColor: '$green',
    borderRadius: 10,
  },

  input: {
    width: '100%',
    outline: 'none',
    // border: 'none',
    marginTop: '1rem',
    padding: '0 1rem',
    backgroundColor: '$gray3',
    border: '1px solid $gray5',
    borderRadius: 6,
    height: 40,
    textAlign: 'center',

    '&::placeholder': {
      color: '$gray5',
    },

    '&:focus': {
      outline: 'none',
      borderColor: '$green-light',
    },
  },
})
