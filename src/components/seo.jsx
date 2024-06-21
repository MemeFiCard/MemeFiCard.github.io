import React from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'

export const Seo = ({ title, description, pathname, children }) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        image,
        siteUrl,
        site,
        twitterUsername,
    } = useSiteMetadata()

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        // image: `${siteUrl}${image}`,
        image: `${siteUrl}${image}`, // pending
        url: `${siteUrl}${pathname || ``}`,
        twitterUsername,
        site,
    }

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            <meta name="twitter:creator" content={seo.twitterUsername} />
            <meta name="twitter:site" content={seo.site} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:creator" content={seo.twitterUsername} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:image:alt" content={seo.title} />
            <meta property="og:site_name" content={seo.title} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={seo.title} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:description" content={seo.description} />
            {/* 
            <title>VotingDAO - The largest decentralized voting</title>
            <meta
                name="title"
                content="VotingDAO - The largest decentralized voting"
            />
            <meta
                name="description"
                content="VotingDAO is the first-ever global decentralized election on blockchain in which people can vote for the person they think has 
        been the most influential in advancing blockchain development in the year. We strive to raise awareness of the importance of pop-voting systems in crypto space 
        and explore practical use cases of incorporation of Web 3.0, DAO and NFTs."
            />
            <meta name="theme-color" content="#FFFFFF" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.votingdao.io/" />
            <meta
                property="og:title"
                content="VotingDAO - The largest decentralized voting"
            />
            <meta
                property="og:description"
                content="Vote now for Blockchain Person of the Year 2021!"
            />
            <meta
                property="og:image"
                content="https://votingdao-nft-assets.s3.ap-southeast-1.amazonaws.com/Proof-of-Vote-static.jpg"
            />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.votingdao.io/" />
            <meta
                property="twitter:title"
                content="VotingDAO - The largest decentralized voting"
            />
            <meta
                property="twitter:description"
                content="Vote now for Blockchain Person of the Year 2021!"
            />
            <meta
                property="twitter:image"
                content="https://votingdao-nft-assets.s3.ap-southeast-1.amazonaws.com/Proof-of-Vote-static.jpg"
            /> */}
            {children}
        </>
    )
}
