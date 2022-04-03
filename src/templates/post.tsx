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
                description={data.post.body.slice(0, 400)}
                image={{
                    height: data.post.frontmatter.imagePreview.childImageSharp.resize.height,
                    width: data.post.frontmatter.imagePreview.childImageSharp.resize.width,
                    src: data.post.frontmatter.imagePreview.childImageSharp.resize.src,
                    type: 'image/png',
                }}
                title={data.post.frontmatter.title}
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
        post: markdownRemark(id: {eq: $id}) {
            ...PostFragment
            body: excerpt(format: HTML, pruneLength: 30000)
        }
    }
`;
