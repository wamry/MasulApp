import { AppRegistry } from 'react-native'
import App from './src/app'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)

import { LogBox } from 'react-native'
LogBox.ignoreAllLogs() //Ignore all log notifications
