const path = require('path');

module.exports = {
	webpackFinal: async (config, { configType }) => {
		config.resolve.modules.push(path.resolve(__dirname, '../src'));

		return config;
	},
	stories: ['../src/**/*.stories.@(js|mdx)'],
	addons: ['@storybook/addon-essentials', 'storybook-addon-material-ui'],
};
