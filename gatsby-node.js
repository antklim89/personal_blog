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
            createPage,
            items: posts,
            itemsPerPage: 10,
            pathPrefix: '/posts',
            component: path.resolve('src/templates/posts.tsx'),
        });

    } catch (error) {
        console.error(error);
        reporter.panicOnBuild('Error while running GraphQL query.');
        return;
    }
};
