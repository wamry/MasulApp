import { Toggle } from '@components'
import React, { useContext, useMemo } from 'react'
import { changeLaguage } from '@i18n'
import { View } from 'react-native'
import createStyles from './styles'
import i18next from 'i18next'
import { ThemeContext } from '@theme/theme-provider'
import { useTranslation } from 'react-i18next'

type Props = {}

const createLangList = (t: any): { label: string; key: 'en' | 'fr' }[] => {
  return [
    {
      label: t('english'),
      key: 'en',
    },
    {
      label: t('french'),
      key: 'fr',
    },
  ]
}

const createThemeList = (t: any): { label: string; key: 'light' | 'dark' }[] => {
  return [
    {
      label: t('light'),
      key: 'light',
    },
    {
      label: t('dark'),
      key: 'dark',
    },
  ]
}

export const SettingsScreen = ({}: Props) => {
  const { t } = useTranslation()
  const theme = useContext(ThemeContext)
  const styles = createStyles(theme)
  const themesList = useMemo(() => createThemeList(t), [t])
  const langList = useMemo(() => createLangList(t), [t])
  const currentLangIndex = langList.findIndex((el) => el.key === i18next.language)
  const currentThemeIndex = themesList.findIndex((el) => el.key === theme.currentTheme)

  const handleChangeLang = (index: number) => changeLaguage(langList[index].key)
  const handleChangeTheme = (index: number) => theme.changeTheme(themesList[index].key)

  return (
    <View style={styles.container}>
      <Toggle
        items={langList.map((el) => el.label)}
        onChangeActive={handleChangeLang}
        currentIndex={currentLangIndex === -1 ? 0 : currentLangIndex}
      />
      <Toggle
        containerStyle={{ marginTop: 20 }}
        items={themesList.map((el) => el.label)}
        onChangeActive={handleChangeTheme}
        currentIndex={currentThemeIndex === -1 ? 0 : currentThemeIndex}
      />
    </View>
  )
}
