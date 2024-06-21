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
        image: `${image}`, // pending
        url: `${siteUrl}${pathname || ``}`,
        twitterUsername,
        site,
    }

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="twitter:image:src" content={seo.image} />
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
            {/* <meta property="og:image:width" content="1240" />
            <meta property="og:image:height" content="640" /> */}
            <meta property="og:site_name" content={seo.title} />
            <meta property="og:type" content="object" />
            <meta property="og:title" content={seo.title} />
            <meta property="og:url" content={seo.url} />
            <meta name="canonical" content={seo.url} />
            <meta property="og:description" content={seo.description} />
            {/* <link rel="canonical" href={seo.url} /> */}
            {children}
        </>
    )
}
