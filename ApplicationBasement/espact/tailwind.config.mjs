/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', '../__CORE__/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primaryColor: '#36a8a5',
                textColor: '#000000',
            },
            fontFamily: {
                font: ['AvertaStandardRegular'],
            },
        },
    },
    plugins: [],
};
