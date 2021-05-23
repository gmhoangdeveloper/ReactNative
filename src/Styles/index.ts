import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

const scale = (size: number) => (width / 376) * size;
const verticalScale = (size: number) => (height / 667) * size;
const horizontalScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const gutterBase = scale(5);

const normalize = (size: number) => {
  const newSize = scale(size);
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

export default {
  dimensions: {
    width,
    height,
  },

  palette: {
    primary: {
      main: '#FF5722',
    },
    secondary: {
      main: '#448AFF',
    },
    divider: 'rgba(0, 0, 0, 0.08)',
    error: '#f11f1f',
  },
  text: {
    primaryColor: '#121212',
    secondaryColor: '#777777',
    thirdColor: '#999999',
  },
  backgroundBody: '#f5f5f5',
  backgroundPaper: '#fff',

  borderColor: '#777777',
  radius: {
    button: gutterBase,
    image: gutterBase,
    input: gutterBase,
    card: gutterBase * 2,
  },

  gutter: {
    text: gutterBase,
    component: gutterBase * 2,
    container: gutterBase * 4,
  },

  fontFamily: {
    light: 'Roboto-Light',
    medium: 'Roboto-Medium',
    regular: 'Roboto-Regular',
    semiBold: 'Roboto-Medium',
    bold: 'Roboto-Bold',
    boldItalic: 'Roboto-BoldItalic',
    black: 'Roboto-Black',
  },
  fontSize: {
    icon: normalize(20),
    body: normalize(14),
    body2: normalize(12),
    title: normalize(20),
    numberMini: normalize(12),
    h1: normalize(32),
    h2: normalize(28),
    h3: normalize(24),
    h4: normalize(22),
    h5: normalize(18),
    h6: normalize(14),
  },

  verticalScale,
  horizontalScale,
  normalize,
  scale,
};
