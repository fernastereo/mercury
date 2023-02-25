const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                ubuntu: ['Ubuntu'],
            },
            colors: {
                'mercury-1': '#78c26f',
                'mercury-2': '#60d853',
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
