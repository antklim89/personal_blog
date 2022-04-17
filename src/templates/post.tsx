import { Container } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/Seo';
import Post from '~/layouts/Post';
import { IPost } from '~/types';


const PostPage: FC<PageProps<{post: IPost}>> = ({ data }) => {
    return (
        <>
            <Seo
                description={data.post.bodyPreview}
                image={{
                    height: data.post.imagePreview.height,
                    width: data.post.imagePreview.width,
                    src: data.post.imagePreview.url,
                    type: 'image/png',
                }}
                title={data.post.title}
            />
            <Container maxWidth="container.lg"> 
                <Post {...data.post} />
            </Container>
        </>
    );
};

export default PostPage;

export const query = graphql`
    query PostPage($id: String!) {
        post: graphCmsPost(id: {eq: $id}) {
            ...PostFragment
            body {
                html
            }
            bodyPreview
        }
    }
`;
