import { Toggle } from '@components'
import React from 'react'
import { changeLaguage } from '@i18n'
import { View } from 'react-native'
import styles from './styles'
import i18next from 'i18next'

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

export const SettingsScreen = ({}: Props) => {
  const currentIndex = langs.findIndex((el) => el.key === i18next.language)

  const handleChangeLang = (index: number) => changeLaguage(langs[index].key)

  return (
    <View style={styles.container}>
      <Toggle
        items={langs.map((el) => el.label)}
        onChangeActive={handleChangeLang}
        currentIndex={currentIndex === -1 ? 0 : currentIndex}
      />
    </View>
  )
}
