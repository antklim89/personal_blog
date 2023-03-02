require('dotenv').config();


module.exports = {
    siteMetadata: {},
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-image',
        'gatsby-plugin-sass',
        'gatsby-plugin-netlify',
        'gatsby-transformer-json',
        {
            resolve: 'gatsby-plugin-typegen',
            options: {
                emitSchema: { 'src/__generated__/gatsby-introspection.json': true },
                emitPluginDocument: { 'src/__generated__/gatsby-plugin-documents.graphql': true },
            },
        },
        {
            resolve: 'gatsby-source-prismic',
            options: {
                repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
                accessToken: process.env.PRISMIC_ACCESS_TOKEN,
                customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
            },
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
                isBaseProvider: true,
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
