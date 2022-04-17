module.exports = {
    siteMetadata: {},
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-image',
        'gatsby-plugin-sass',
        'gatsby-plugin-netlify',
        'gatsby-transformer-json',
        {
            resolve: 'gatsby-source-graphcms',
            options: { endpoint: 'https://api-eu-central-1.graphcms.com/v2/cl1n89ik01cs301xk3b6m5mtg/master' },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                footnotes: true,
                gfm: true,
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: { maxWidth: 590 },
                    },
                ],
            },
        },
        {
            resolve: '@chakra-ui/gatsby-plugin',
            options: {
                resetCSS: true,
                isUsingColorMode: true,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'personal blog',
                start_url: '/',
                display: 'minimal-ui',
                icon: 'src/images/icon.png',
            },
        },
        {
            resolve: 'gatsby-alias-imports',
            options: { aliases: { '~': 'src/' } },
        },
    ],
};
