import { palette } from './palette'

const colorsCommon = {
  transparent: 'rgba(0, 0, 0, 0)',
  activityIndicator: palette.yellow,
}

export const colors = {
  light: {
    ...colorsCommon,
    backgroundColor: palette.white,
    borderColor: palette.grayB,
    borderColorLight: palette.grayC,
  },
  dark: {
    ...colorsCommon,
    backgroundColor: palette.gray1,
    borderColor: palette.gray6,
    borderColorLight: palette.gray8,
  },
}
