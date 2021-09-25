module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'tb-blue': '#85b1b2',
                'tb-sand': '#e5d993',
                'tb-taupe': '#937b6a',
                'tb-brown': '#634228',
            },
            dropShadow: {
                overlay: '0 8px 4px rgba(0, 0, 0, 0.3)',
            },
            fontFamily: {
                'sans-alt': ['Inconsolata', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {
            ringWidth: ['hover'],
        },
    },
    plugins: [],
};
