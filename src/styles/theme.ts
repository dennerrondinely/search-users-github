import { colors } from './colors';

export const theme = {
  grid: {
    container: '114.4rem',
    gutter: '3.2rem'
  },
  border: {
    radius: {
      small: '0.4rem',
      medium: '0.8rem',
      large: '1.6rem'
    }
  },
  font: {
    family: "'Source Sans Pro', 'sans-serif', 'Arial'",
    light: 300,
    normal: 400,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    },
    style: {
      normal: 'normal',
      italic: 'italic',
      oblique: 'oblique'
    }
  },
  colors,
  sizes: {
    small: '27.8rem',
    medium: '55.7rem',
    large: '114.4rem'
  },
  spacings: {
    minimal: '0.4rem',
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
};
