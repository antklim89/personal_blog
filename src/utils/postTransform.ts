import { IGatsbyImageData } from 'gatsby-plugin-image';

import { DeepRequired } from '~/types';


export function postTransform(post: DeepRequired<GatsbyTypes.HomePostsListQuery['allPrismicPost']['nodes'][number]>) {
    return {
        title: post.data.title.text,
        body: post.data.body.html,
        imagePreview: {
            gatsbyImageData: post.data.imagepreview.gatsbyImageData as unknown as IGatsbyImageData,
            height: post.data.imagepreview.dimensions.height,
            width: post.data.imagepreview.dimensions.width,
            url: post.data.imagepreview.url,
        },
        id: post.id,
        createdAt: post.data.createdat,
    };
}
