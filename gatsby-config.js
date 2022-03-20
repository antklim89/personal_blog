module.exports = {
    siteMetadata: {
        title: 'Gatsby Template',
        description: 'Template',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-image',
        'gatsby-plugin-sass',
        'gatsby-plugin-netlify',
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                enableIdentityWidget: false,
                manualInit: true,
                modulePath: `${__dirname}/src/cms/index.js`,
                publicPath: 'cms',
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
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
            },
        },
        {
            resolve: 'gatsby-alias-imports',
            options: { aliases: { '~': 'src/' } },
        },
    ],
};
