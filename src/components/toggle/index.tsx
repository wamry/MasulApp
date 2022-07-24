import { ThemeContext } from '@theme/theme-provider'
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native'
import createStyles from './styles'

type Props = {
  items: string[]
  currentIndex?: number
  onChangeActive: (index: number) => void
  containerStyle?: ViewStyle
}

export const Toggle = ({ items, currentIndex = 0, onChangeActive, containerStyle }: Props) => {
  const [localCurrentIndex, setLocalCurrentIndex] = useState(currentIndex)
  const theme = useContext(ThemeContext)
  const styles = createStyles(theme)

  useEffect(() => {
    if (currentIndex === localCurrentIndex) return
    setLocalCurrentIndex(currentIndex)
  }, [currentIndex])

  const handleChangeActive = (index: number) => {
    setLocalCurrentIndex(index)
    onChangeActive?.(index)
  }

  const renderItem = (item: string, index: number) => {
    const isFirst = index === 0
    const isLast = index === items.length - 1
    const isActive = localCurrentIndex === index
    return (
      <TouchableOpacity
        style={[
          styles.item,
          isActive && styles.itemActive,
          isFirst && styles.itemLeftMost,
          isLast && styles.itemRightMost,
        ]}
        onPress={() => handleChangeActive(index)}
      >
        <Text style={[styles.label, isActive && { color: '#000' }]}>{item}</Text>
      </TouchableOpacity>
    )
  }

  return <View style={[styles.container, containerStyle]}>{items.map(renderItem)}</View>
}
