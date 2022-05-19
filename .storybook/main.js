module.exports = {
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    core: {
        disableTelemetry: true,
    },
    framework: '@storybook/react',
    stories: [
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
};