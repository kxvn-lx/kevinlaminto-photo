const resolveConfig = require('tailwindcss/resolveConfig')
const tailwindConfig = require('./tailwind.config.js')

const fullConfig = resolveConfig(tailwindConfig)
require('dotenv').config()

module.exports = {
    siteMetadata: {
        title: `Kevin Laminto Photo`,
        description: `Melbourne based photographer`,
        author: `@kxvn.lx`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-cloudinary`,
            options: {
                cloudName: process.env.CLOUDINARY_CLOUD_NAME,
                apiKey: process.env.CLOUDINARY_API_KEY,
                apiSecret: process.env.CLOUDINARY_API_SECRET,
                maxResults: 500,
                tags: true,
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-tailwind`,
                short_name: `starter`,
                start_url: `/`,
                background_color: fullConfig.theme.colors.white,
                theme_color: fullConfig.theme.colors.green['500'],
                display: `minimal-ui`,
                icon: `src/images/tailwind-icon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [
                    require(`tailwindcss`)(tailwindConfig),
                    require(`autoprefixer`),
                    ...(process.env.NODE_ENV === `production`
                        ? [require(`cssnano`)]
                        : []),
                ],
            },
        },
        `gatsby-plugin-offline`,
    ],
}
