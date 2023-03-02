import { IGatsbyImageData } from 'gatsby-plugin-image';
import { z } from 'zod';

import { IPost, IPostPreview } from '~/types';


type PrismicPost = DeepPartial<GatsbyTypes.PrismicPost>;


export const basePostSchema = z.object({
    id: z.string(),
    title: z.string(),
    createdAt: z.string(),
    imagePreview: z.object({
        gatsbyImageData: z.any() as z.ZodType<IGatsbyImageData>,
        url: z.string(),
        width: z.number(),
        height: z.number(),
    }),
});
export const postSchema = z.object({ body: z.string() }).merge(basePostSchema);
export const postPreviewSchema = z.object({ bodyPreview: z.string() }).merge(basePostSchema);


export function postTransform(post: PrismicPost) {
    if (typeof window === 'undefined') postSchema.parse(transform(post));
    return transform(post) as unknown as IPost;
}

export function postPreviewsTransform(posts: readonly PrismicPost[]) {
    if (typeof window === 'undefined') postPreviewSchema.array().parse(posts.map((post) => transform(post)));
    return posts.map((post) => transform(post)) as unknown as IPostPreview[];
}

function transform(post: PrismicPost = {}) {
    return {
        title: post.data?.title?.text,
        body: post.data?.body?.html,
        bodyPreview: post.data?.bodypreview,
        imagePreview: {
            gatsbyImageData: post.data?.imagepreview?.gatsbyImageData,
            height: post.data?.imagepreview?.dimensions?.height,
            width: post.data?.imagepreview?.dimensions?.width,
            url: post.data?.imagepreview?.url,
        },
        id: post.id,
        createdAt: post.first_publication_date,
    };
}

