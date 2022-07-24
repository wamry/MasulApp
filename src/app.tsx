import '@i18n'
import React, { useState, useEffect } from 'react'
import {
  SafeAreaProvider,
  initialWindowMetrics,
  SafeAreaView,
} from 'react-native-safe-area-context'
import { Linking } from 'react-native'
import { enableScreens } from 'react-native-screens'
import { StatusBar } from '@components'
import { RootStore, RootStoreProvider, setupRootStore } from '@store'
import { RootNavigator } from '@navigation/root-navigator'
import ThemeProvider from '@theme/theme-provider'

enableScreens(true)

export default function App() {
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined)

  // Kick off initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    ;(async () => {
      // Load everything here first
      const store = await setupRootStore()
      store.resetLoadingError()
      setRootStore(store)
    })()
  }, [])

  const linking = {
    prefixes: ['masulnews://'],
    config: {
      screens: {
        NewsStack: {
          screens: {
            News: 'article/:articleUrl',
          },
        },
      },
    },
    async getInitialURL() {
      // Check if app was opened from a deep link
      const url = await Linking.getInitialURL()
      if (url != null) {
        return url
      }
    },
  }

  if (!rootStore) return null

  return (
    <>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <RootStoreProvider value={rootStore}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <ThemeProvider>
              <RootNavigator linking={linking} />
            </ThemeProvider>
          </SafeAreaProvider>
        </RootStoreProvider>
      </SafeAreaView>
    </>
  )
}
