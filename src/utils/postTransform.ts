import { postSchema } from '~/schemas';
import { IPost } from '~/types';


export function postTransform(post: Partial<GatsbyTypes.HomePostsListQuery['allPrismicPost']['nodes'][number]>): IPost {
    return postSchema.parse({
        title: post.data?.title?.text,
        body: post.data?.body?.html,
        imagePreview: {
            gatsbyImageData: post.data?.imagepreview?.gatsbyImageData,
            height: post.data?.imagepreview?.dimensions?.height,
            width: post.data?.imagepreview?.dimensions?.width,
            url: post.data?.imagepreview?.url,
        },
        id: post.id,
        createdAt: post.createdAt,
    });
}
