module.exports = api => {
  api.cache(true);
  const config ={
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './assets',
            components: './components',
            constants: './constants',
            hooks: './hooks',
            translations: './translations',
            types: './types',
            screens: './screens'
          }
        }
      ]
    ]
  };
  return config;
};