import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

type Props = {
  items: string[]
  currentIndex?: number
  onChangeActive: (index: number) => void
}

export const Toggle = ({ items, currentIndex = 0, onChangeActive }: Props) => {
  const [localCurrentIndex, setLocalCurrentIndex] = useState(currentIndex)

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
        <Text style={styles.label}>{item}</Text>
      </TouchableOpacity>
    )
  }

  return <View style={styles.container}>{items.map(renderItem)}</View>
}
