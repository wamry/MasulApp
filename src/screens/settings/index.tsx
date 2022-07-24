import { Toggle } from '@components'
import React, { useContext } from 'react'
import { changeLaguage } from '@i18n'
import { View } from 'react-native'
import createStyles from './styles'
import i18next from 'i18next'
import { ThemeContext } from '@theme/theme-provider'

type Props = {}

const langs: { label: string; key: 'en' | 'fr' }[] = [
  {
    label: 'english',
    key: 'en',
  },
  {
    label: 'french',
    key: 'fr',
  },
]

const themes: { label: string; key: 'light' | 'dark' }[] = [
  {
    label: 'light',
    key: 'light',
  },
  {
    label: 'dark',
    key: 'dark',
  },
]

export const SettingsScreen = ({}: Props) => {
  const theme = useContext(ThemeContext)
  const styles = createStyles(theme)
  const currentLangIndex = langs.findIndex((el) => el.key === i18next.language)
  const currentThemeIndex = themes.findIndex((el) => el.key === theme.currentTheme)

  const handleChangeLang = (index: number) => changeLaguage(langs[index].key)
  const handleChangeTheme = (index: number) => theme.changeTheme(themes[index].key)

  return (
    <View style={styles.container}>
      <Toggle
        items={langs.map((el) => el.label)}
        onChangeActive={handleChangeLang}
        currentIndex={currentLangIndex === -1 ? 0 : currentLangIndex}
      />
      <Toggle
        containerStyle={{ marginTop: 20 }}
        items={themes.map((el) => el.label)}
        onChangeActive={handleChangeTheme}
        currentIndex={currentThemeIndex === -1 ? 0 : currentThemeIndex}
      />
    </View>
  )
}
