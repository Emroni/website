module.exports = {
    content: [
        './src/**/*.{css,html,js,jsx,ts,tsx}'
    ],
    plugins: [
        ({ addBase, theme }) => {
            // Map colors to variables
            const colorEntries = Object.entries(theme('colors'))
                .map(([name, value]) => ([`--color-${name}`, value]));

            // Map screens to size variables
            const sizeEntries = Object.entries(theme('screens'))
                .map(([name, value]) => ([`--size-${name}`, value]));

            // Add to root
            addBase({
                ':root': {
                    ...Object.fromEntries(colorEntries),
                    ...Object.fromEntries(sizeEntries),
                },
            });
        },
    ],
    theme: {
        colors: {
            'black': '#000000',
            'blue-50': '#CFD7DC',
            'blue-100': '#8699A6',
            'blue-200': '#627B8C',
            'blue-300': '#4C677B',
            'blue-400': '#3A586E',
            'blue-500': '#193C56',
            'blue-600': '#173A52',
            'blue-700': '#143146',
            'blue-800': '#11293C',
            'blue-900': '#0E2433',
            'white': '#FFFFFF',
        },
        fontFamily: {
            sans: ['Work Sans', 'sans-serif'],
        },
        extend: {
            screens: {
                xs: '320px',
            },
        },
    },
};