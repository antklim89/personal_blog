import { Container } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { Pagination } from '~/components/Pagination';
import { Seo } from '~/components/Seo';
import PostsList from '~/layouts/PostsList';
import { IPagination, IPost } from '~/types';


const PostsPage: FC<PageProps<{ allMarkdownRemark: { nodes: IPost[] } }, IPagination>> = ({ data, pageContext }) => {
    return (
        <>
            <Seo title="Blogs" />
            <Container maxW="container.lg" my={10}>
                <Pagination {...pageContext} />
                <PostsList posts={data.allMarkdownRemark.nodes} />
                <Pagination {...pageContext} />
            </Container>
        </>
    );
};

export default PostsPage;

export const query = graphql`
query PostsList ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
        filter: {
            fileAbsolutePath: { regex: "/\\/posts\\/.*\\.md/i" },
            frontmatter: { hidden: { eq: false } }
        }
        sort: { fields: [frontmatter___createdAt], order: DESC }
        skip: $skip
        limit: $limit
    ) {
        nodes {
            ...PostFragment
            body: excerpt(format: HTML, pruneLength: 300)
        }
    }
}
`;
