module.exports = {
    plugins: {
        '@fullhuman/postcss-purgecss': {
            content: ['./src/**/*.{js,ts,jsx,tsx}'],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        },
        // Other PostCSS plugins if needed
    },
};