import { globalCss, styled } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$gray4',
    color: '$gray7',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Montserrat',
    fontWeight: 400,
  },

  input: {
    outline: 'none',
    border: 'none',
  },

  h1: {
    fontSize: '$title',
    lineHeight: 1.6,
  },
  h2: {
    fontSize: '$subtitle',
    lineHeight: 1.3,
  },
  p: {
    fontSize: '$text',
    lineHeight: 1.6,
  },
  span: {
    // fontSize: '$subText',
    // color: '$gray6',
    lineHeight: 1.6,
  },
})

export const ContainerStyleBody = styled('main', {
  height: '260vh',
  padding: '1rem',
})
