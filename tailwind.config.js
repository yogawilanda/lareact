import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import theme from 'tailwindcss/defaultTheme';
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            },
            accentColor: {
                'primary': 'red',
                'secondary': '#4B5563',
            },
            backgroundColor: theme => ({
                ...theme('colors'),
                'primary': '#AA4A44',
                'secondary': '#4B5563',
                'danger': '#E3342F',
            }),
            textColor: theme => ({
                ...theme('colors'),
                'primary': '#AA4A44',
                'secondary': '#4B5563',
                'danger': '#E3342F',
            }),
            borderColor: theme => ({
                ...theme('colors'),
                DEFAULT: theme('colors.gray.300', 'currentColor'),
                'primary': '#AA4A44',
                'secondary': '#4B5563',
                'danger': '#E3342F',
            }),
            ringColor: theme => ({
                ...theme('colors'),
                'primary': '#AA4A44',
                'secondary': '#4B5563',
                'danger': '#E3342F',
            }),
            ringOffsetColor: theme => theme('colors'),
            ringOffsetWidth: theme => theme('spacing'),
        },
    },
    // if dark mode is needed, from the nextui docs
    darkMode: "class", 
    plugins: [forms, nextui()],
};
