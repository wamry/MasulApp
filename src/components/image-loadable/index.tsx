import React, { useState } from 'react'
import { ActivityIndicator, Image, ImageProps, View } from 'react-native'
import { colors } from 'theme'

import { styles } from './styles'
type HasSource = { source: { uri?: string } }
type ImageProps_ = Omit<ImageProps, 'source'> & HasSource

export const ImageLoadable = ({ source, ...otherProps }: ImageProps_) => {
  const [isImageLoaded, setImageLoaded] = useState(false)

  function handleLoadEnd() {
    !isImageLoaded && setImageLoaded(true)
  }

  return (
    <View style={styles.container}>
      {source.uri && <Image {...otherProps} onLoadEnd={handleLoadEnd} source={source} />}
      {
        <ActivityIndicator
          color={colors.activityIndicator}
          style={[styles.activityIndicator, { display: isImageLoaded ? 'none' : 'flex' }]}
        />
      }
    </View>
  )
}
