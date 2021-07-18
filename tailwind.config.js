// See https://tailwindcss.com/docs/configuration for details
module.exports = {
    purge: ['./src/**/*.js'],
    // https://github.com/tailwindlabs/tailwindcss-forms
    plugins: [require('@tailwindcss/forms')],
    theme: {
        extend: {
            colors: {
                'sd-stone': '#F9F7E8',
                'sd-green': '#62BFAD',
            },
        },
    },
}
