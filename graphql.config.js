module.exports = {
    schema: ['src/__generated__/gatsby-introspection.json'],
    documents: ['src/__generated__/gatsby-plugin-documents.graphql', 'src/**/*.{graphql,js,ts,jsx,tsx}'],
    extensions: {
        endpoints: {
            default: {
                url: 'http://localhost:3000/___graphql',
                headers: { 'user-agent': 'JS GraphQL' },
                introspect: false,
            },
        },
    },
};
