const path = require('path');

const { paginate } = require('gatsby-awesome-pagination');


exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPreset({
        name: '@babel/preset-react',
        options: { runtime: 'automatic' },
    });
};

/**
 * 
 * @param {import('gatsby').CreatePageArgs} 
 */
exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;
    

    try {
        const { data: { allMarkdownRemark: { nodes: posts } } } = await graphql(`#graphql
            query Posts {
                allMarkdownRemark(filter: {
                    fileAbsolutePath: { regex: "/\/posts\/.*\.md/i" },
                    frontmatter: { hidden: { eq: false } }
                }) {
                    nodes {
                        id
                    }
                }
            }
        `);
        
        posts.forEach(({ id }) => {
            createPage({
                path: `/posts/${id}`,
                component: path.resolve('src/templates/post.tsx'),
                context: { id },
            });
        });

        paginate({
            createPage, // The Gatsby `createPage` function
            items: posts, // An array of objects
            itemsPerPage: 10, // How many items you want per page
            pathPrefix: '/blogs', // Creates pages like `/blog`, `/blog/2`, etc
            component: path.resolve('src/templates/blogs.tsx'), // Just like `createPage()`
        });

    } catch (error) {
        console.error(error);
        reporter.panicOnBuild('Error while running GraphQL query.');
        return;
    }
};
