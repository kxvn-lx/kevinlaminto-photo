// See https://tailwindcss.com/docs/configuration for details
module.exports = {
    purge: ['./src/**/*.js'],
    // https://github.com/tailwindlabs/tailwindcss-forms
    plugins: [require('@tailwindcss/forms')],
    theme: {
        extend: {
            colors: {
                'kl-black': '#192A51',
                'kl-white': '#FDFFFC',
                'kl-salmon': '#F49097',
            },
        },
    },
}
