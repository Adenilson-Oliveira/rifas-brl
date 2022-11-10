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
})

export const ContainerStyleBody = styled('main', {
  minHeight: '100vh',
  padding: '1rem',
})
