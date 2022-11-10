import { styled } from '..'

export const ContainerLogin = styled('div', {
  div: {
    maxWidth: 600,
    margin: '0 auto',
    backgroundColor: '$gray2',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 10,
  },
})

export const ContainerFormLogin = styled('form', {
  width: '100%',

  'label, input': {
    width: '100%',
    // marginBottom: '2rem',
  },

  label: {
    p: {
      marginTop: '1rem',
    },
  },

  input: {
    outline: 'none',
    // border: 'none',
    margin: 0,
    padding: '0 1rem',
    backgroundColor: '$gray3',
    border: '1px solid $gray5',
    borderRadius: 6,
    height: 40,

    '&::placeholder': {
      color: '$gray5',
    },

    '&:focus': {
      outline: 'none',
      borderColor: '$green-light',
    },
  },

  button: {
    height: 40,
    backgroundColor: '$green',
    border: 'none',
    lineHeight: 0,
    fontWeight: 'bold',
    color: '$white',
    width: '100%',
    marginTop: '2rem',
    borderRadius: 6,

    '&:focus': {
      outline: 'none',
      borderColor: '$green',
    },

    '&:hover': {
      transition: '0.2ms',
      backgroundColor: '$green-light',
    },
  },
})
