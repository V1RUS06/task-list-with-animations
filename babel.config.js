module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      'module-resolver',
      {
        extensions: [
          '.ts',
          '.json',
          '.tsx',
          '.js',
          '.jsx',
          '.png',
          '.jpg',
          '.jpeg',
        ],
        alias: {
          '@styles': './app/styles',
          '@screens': './app/screens',
          '@navigation': './app/navigation',
          '@components': './app/components',
          '@assets': './app/assets',
          '@constants': './app/constants',
          '@customTypes': './app/types',
          '@context': './app/context',
          '@store': './app/store',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
