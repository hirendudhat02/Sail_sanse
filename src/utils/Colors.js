const commonColor = {
  colors: {
    commonWhite: '#fff',
    commonBlack: '#000',
    orange: '#cea245',
    yellow: '#FFE45E',
    offWhite: '#F1F2F6',
    gray: '#C4C5CE',
    homeBackground: '#F9F9FF',
    green: '#0FCBA1',
    lightOrange: 'rgba(255, 162, 0, 0.1)',
    grayText: '#8A8D9F'
  },
};

const light = {
  colors: {
    themeColor: '#fff',
    black: '#000',
    ...commonColor.colors,
  },
};

const dark = {
  colors: {
    themeColor: '#000',
    white: '#fff',
    ...commonColor.colors,
  },
};

export default {light, dark};
