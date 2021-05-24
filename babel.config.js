module.exports = api => {
  api.cache(true);
  const config ={
    presets: ['babel-preset-expo'],
    plugins: [
      ["module:react-native-dotenv", {
        "moduleName": "@env",
        "path": ".env",
        "blacklist": null,
        "whitelist": null,
        "safe": false,
        "allowUndefined": true
      }],
      [
        'module-resolver',
        {
          alias: {
            assets: './assets',
            components: './components',
            constants: './constants',
            config: './config',
            fixtures: './fixtures',
            hooks: './hooks',
            translations: './translations',
            screens: './screens',
            types: './types',
            utilities: './utilities'
          }
        }
      ]
    ]
  };
  return config;
};