import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/Seo';
import Post from '~/layouts/Post';
import { postTransform } from '~/transforms';


const PostPage: FC<PageProps<DeepRequired<GatsbyTypes.PostPageQuery>>> = ({ data }) => {
    const post = postTransform(data.prismicPost);

    return (
        <>
            <Seo
                description={post.body}
                image={{
                    height: post.imagePreview.height,
                    width: post.imagePreview.width,
                    src: post.imagePreview.url,
                    type: 'image/png',
                }}
                title={post.title}
            />
            <Post {...post} />
        </>
    );
};

export default PostPage;

export const query = graphql`
    query PostPage($id: String!) {
        prismicPost(id: {eq: $id}) {
            ...Post
        }
    }
`;
