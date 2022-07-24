import React, { ReactNode, useEffect, useState } from 'react'
import { colors } from './colors'
import { typography } from './typography'
import * as Storage from '@utils/storage'

type ColorSchemas = 'light' | 'dark'

function getTheme(colorSchema: ColorSchemas) {
  return {
    colors: colors[colorSchema],
    typography: typography[colorSchema],
    currentTheme: colorSchema,
    changeTheme: async (_: ColorSchemas) => {},
  }
}

export type Theme = {
  colors: typeof colors['light']
  typography: typeof typography['light']
  currentTheme: ColorSchemas
  changeTheme: (_: ColorSchemas) => Promise<void>
}

export const ThemeContext = React.createContext(getTheme('light'))

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<ColorSchemas>('light')

  useEffect(() => {
    Storage.load('theme').then((val) => {
      setCurrentTheme(val ?? 'light')
    })
  }, [])

  const theme = getTheme(currentTheme)

  const changeTheme = async (nextTheme: 'light' | 'dark') => {
    if (currentTheme === nextTheme) return
    setCurrentTheme(nextTheme)
    await Storage.save('theme', nextTheme)
  }

  return (
    <ThemeContext.Provider value={{ ...theme, changeTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
