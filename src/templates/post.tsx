import { Container } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/Seo';
import Post from '~/layouts/Post';
import { IPost } from '~/types';


const PostPage: FC<PageProps<{post: IPost}>> = ({ data }) => {
    return (
        <>
            <Seo title="Post" />
            <Container maxWidth="container.lg"> 
                <Post {...data.post} />
            </Container>
        </>
    );
};

export default PostPage;

export const query = graphql`
    query PostPage($id: String!) {
        post: markdownRemark(id: {eq: $id}) {
            ...PostFragment
            body: excerpt(format: HTML, pruneLength: 30000)
        }
    }
`;
