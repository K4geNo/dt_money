import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // Base
                'background': '#121214',
                'shape-principal': '#202024',
                'shape-secundaria': '#29292E',
                'shape-terciaria': '#323238',
                'placeholder': '#7C7C8A',
                'text-base': '#E1E1E6',
                'titles': '#E1E1E6',

                // Produto
                'green-dark': '#015F43',
                'green': '#00875F',
                'green-light': '#00B37E',
                'red-dark': '#AA2834',
                'red': '#F75A68'
            }
        },
    },

    plugins: [forms],
};
