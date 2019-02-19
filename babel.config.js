module.exports = function(api){
  api.cache(true);

  var presets = [
    [
      '@babel/preset-env', {
        targets: [
          'last 2 version',
          'ie >= 10'
        ],
        modules: 'commonjs'
      }
    ],
    '@babel/preset-react'
  ];

  var plugins = [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-export-default-from'
  ];

  return {
    presets,
    plugins,
    env: {
      test: {
        presets: ['babel-preset-env']
      }
    }
  };
};