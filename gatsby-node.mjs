import path from 'path';

import { paginate } from 'gatsby-awesome-pagination';
import { z } from 'zod';


export const onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPreset({
        name: '@babel/preset-react',
        options: { runtime: 'automatic' },
    });
};

/**
 *
 * @param {import('gatsby').CreatePageArgs}
 */
export const createPages = async ({ actions, graphql, reporter }) => {
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


const richTextSchema = z.array(z.object({
    type: z.string(),
}));

const imageSchema = z.object({
    alt: z.string().nullish(),
    url: z.string(),
    dimensions: z.object({ width: z.number(), height: z.number() }),
});

const siteInfoSchema = z.object({
    title: z.string(),
    keywords: z.string(),
    description: z.string(),
    author: z.string(),
    hero_text: richTextSchema,
    hero_image: imageSchema,
    about: richTextSchema,
});

const socialSchema = z.object({
    icon: z.any(),
    link: z.object({ url: z.string() }),
    title: z.string(),
});

const postSchema = z.object({
    title: z.string(),
    imagepreview: imageSchema,
    bodypreview: z.string(),
    body: richTextSchema,
});

/**
 *
 * @param {import('gatsby').CreateNodeArgs}
 */
export const onCreateNode = ({ node }) => {
    try {
        if (node.internal?.type === 'PrismicSocials') {
            socialSchema.parse(node.data);
        }

        if (node.internal?.type === 'PrismicPost') {
            postSchema.parse(node.data);
        }

        if (node.internal?.type === 'PrismicSiteInfo') {
            siteInfoSchema.parse(node.data);
        }
    } catch (error) {
        console.error('Validation Nodes Error:\n', error);
        process.exit(1);
    }
};
