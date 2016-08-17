const path = require('path');
module.exports = {
  source: [
    './components'
  ],
  output: './_site',
  theme: './site/theme',
  htmlTemplate: './site/index.html',
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-toc?maxDepth=2',
    'bisheng-plugin-react?lang=jsx',
    'bisheng-plugin-antd'
  ],
doraConfig: {
    verbose: true,
    plugins: ['dora-plugin-upload'],
  },
  webpackConfig(config) {
    config.resolve.alias = {
      'react-router': 'react-router/umd/ReactRouter',
		'components':'src'
    };
	config.babel.plugins.push([
  	require.resolve('babel-plugin-antd'),
	      {
		style: true,
		libraryName: 'antd',
		libDir: 'components',
	      },
	    ]);
    return config;
  },
  port: 8111
};
