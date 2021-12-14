module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'tl-lime': '#a4ce27',
                'tl-sage': '#649044',
                'tl-charcoal': '#171717',
                'tl-iron': '#303030',
                'tl-steel': '#505050',
                'tb-blue': '#85b1b2',
                'tb-sand': '#e5d993',
                'tb-taupe': '#937b6a',
                'tb-brown': '#634228',
                'sl-mint': '#beffec',
                'sl-ecto': '#21eca5',
                'sl-teal': '#00a294',
                'sl-cobalt': '#484a5d',
                'sl-brown': '#714a37',
                'sl-burntorange': '#b95b21',
                'sl-khaki': '#91796c',
            },
            dropShadow: {
                overlay: '0 8px 4px rgba(0, 0, 0, 0.3)',
            },
            fontFamily: {
                'sans-alt': ['Inconsolata', 'sans-serif'],
            },
        },
    },
    plugins: [
        // eslint-disable-next-line global-require
        require('@tailwindcss/forms'),
    ],
};
