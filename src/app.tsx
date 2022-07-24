import '@i18n'
import React, { useState, useEffect } from 'react'
import {
  SafeAreaProvider,
  initialWindowMetrics,
  SafeAreaView,
} from 'react-native-safe-area-context'
import { enableScreens } from 'react-native-screens'
import { StatusBar } from '@components'
import { RootStore, RootStoreProvider, setupRootStore } from '@store'
import { RootNavigator } from '@navigation/root-navigator'
import ThemeProvider from '@theme/theme-provider'

enableScreens(true)

/**
 * This is the root component of our app.
 */
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

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color. You can replace
  // with your own loading component if you wish.
  if (!rootStore) return null

  // otherwise, we're ready to render the app
  return (
    <>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <RootStoreProvider value={rootStore}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <ThemeProvider>
              <RootNavigator />
            </ThemeProvider>
          </SafeAreaProvider>
        </RootStoreProvider>
      </SafeAreaView>
    </>
  )
}
