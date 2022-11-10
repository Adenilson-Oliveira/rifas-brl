import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  globalCss,
  theme,
  createTheme,
  css,
  getCssText,
} = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',

      'green-dark': '#015f43',
      green: '#00875f',
      'green-light': '#00b37e',

      'red-dark': '#aa283',
      red: '#f03847',

      gray9: '#121214',
      gray8: '#202024',
      gray7: '#323238',
      gray6: '#7c7cba',
      gray5: '#8d8d99',
      gray4: '#c4c4cc',
      gray3: '#e1e1e1',
      gray2: '#f3f2f2',
      gray1: '#fafafa',

      navigation: '#161616',
    },
    fontSizes: {
      text: '1rem',
      subText: '0.875rem',
      title: '1.5rem',
      subTitle: '1.250rem',
    },
  },
})
