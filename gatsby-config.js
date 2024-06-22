/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `M3M3F1.XYZ`,
        description: `M3M3F1.XYZ - Pay with SOL, Pay with Mother, Pay with Daddy, Pay with Son`,
        twitterUsername: `@gatsbyjs`, //pending
        // image: 'https://faucet.quicknode.com/images/og-solana-testnet.jpg',
        image: `/preview.jpg`,
        siteUrl: `https://memeficard.github.io`,
        // siteUrl: `https://m3m3f1.xyz/`,
        // siteUrl: `https://solanasummit.memefi.today/`,
        site: 'm3m3f1',
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-postcss',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        // {
        //     resolve: 'gatsby-source-filesystem',
        //     options: {
        //         name: 'images',
        //         path: './src/images/',
        //     },
        //     __key: 'images',
        // },
    ],
}
