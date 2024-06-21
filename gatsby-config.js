/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `M3M3F1.XYZ`,
        description: `M3M3F1.XYZ - Pay with SOL, Pay with Mother, Pay with Daddy, Pay with Son`,
        twitterUsername: `@gatsbyjs`,
        image: 'https://faucet.quicknode.com/images/og-solana-testnet.jpg',
        // image: `/gatsby-icon.png`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
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
