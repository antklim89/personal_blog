

const path = require('path');

const { paginate } = require('gatsby-awesome-pagination');
const { z, ZodError } = require('zod');


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
        const { data: { allPrismicPost: { nodes: posts } } } = await graphql(`#graphql
            query Posts {
                allPrismicPost {
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

    }
};


const siteInfoSchema = z.object({
    title: z.string(),
    keywords: z.string(),
    description: z.string(),
    author: z.string(),
});

const heroSchema = z.object({
    image: z.any(),
    text: z.array(z.object({ type: z.string() })),
});

const aboutSchema = z.object({
    text: z.array(z.object({ type: z.string() })),
});

const socialSchema = z.object({
    icon: z.any(),
    link: z.object({ url: z.string() }),
    title: z.string(),
});

const basePostSchema = z.object({
    title: z.string(),
    imagepreview: z.object({
        gatsbyImageData: z.any(),
        url: z.string(),
        dimensions: z.object({ width: z.number(), height: z.number() }),
    }),
    bodypreview: z.string(),
    body: z.array(z.object({ type: z.string() })),
});

/**
 *
 * @param {import('gatsby').CreateNodeArgs}
 */
exports.onCreateNode = ({ node }) => {
    try {
        if (node.internal?.type === 'PrismicSocials') {
            socialSchema.parse(node.data);
        }

        if (node.internal?.type === 'PrismicPost') {
            basePostSchema.parse(node.data);
        }

        if (node.internal?.type === 'PrismicHero') {
            heroSchema.parse(node.data);
        }

        if (node.internal?.type === 'PrismicAbout') {
            aboutSchema.parse(node.data);
        }

        if (node.internal?.type === 'PrismicSiteInfo') {
            siteInfoSchema.parse(node.data);
        }
    } catch (error) {
        if (error instanceof ZodError) console.error(error.flatten());
        process.exit(1);
    }
};
