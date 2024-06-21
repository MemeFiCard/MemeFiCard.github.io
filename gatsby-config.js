/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `solanasummit-2024`,
        description: `Example project for the Gatsby Head API`,
        twitterUsername: `@gatsbyjs`,
        // image: `/gatsby-icon.png`,
        siteUrl: `https://www.yourdomain.tld`,
        image: 'https://faucet.quicknode.com/images/og-solana-testnet.jpg',
    },
    plugins: [
        'gatsby-plugin-postcss',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
    ],
}
