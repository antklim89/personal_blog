import { IGatsbyImageData } from 'gatsby-plugin-image';


export function postTransform(post: DeepRequired<GatsbyTypes.PostFragment>) {
    return {
        ...transform(post),
        body: post.data.body.html,
    };
}

export function postPreviewTransform(post: DeepRequired<GatsbyTypes.PostPreviewFragment>) {
    return {
        ...transform(post),
        bodyPreview: post.data.bodypreview,
    };
}

export function postPreviewsTransform(nodes: readonly DeepRequired<GatsbyTypes.PostPreviewFragment>[]) {
    return nodes.map(postPreviewTransform);
}

function transform(post: DeepRequired<GatsbyTypes.BasePostFragment>) {
    return {
        title: post.data.title.text,
        imagePreview: {
            gatsbyImageData: post.data.imagepreview.gatsbyImageData as unknown as IGatsbyImageData,
            height: post.data.imagepreview.dimensions.height,
            width: post.data.imagepreview.dimensions.width,
            url: post.data.imagepreview.url,
        },
        id: post.id,
        createdAt: post.first_publication_date,
    };
}

