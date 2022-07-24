module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: false,
      },
    ],
    [
      'module-resolver',
      {
        extensions: ['.ts', '.tsx', '.json'],
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@i18n': './src/i18n',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@store': './src/store',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@api': './src/api',
        },
      },
    ],
  ],
}
