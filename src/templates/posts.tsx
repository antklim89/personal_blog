import { Container } from '@chakra-ui/react';
import { graphql, HeadFC, PageProps } from 'gatsby';
import { FC } from 'react';

import { Seo, Pagination, PostsList } from '~/components';
import { postPreviewsTransform } from '~/transforms';
import { IPagination } from '~/types';


const PostsPage: FC<PageProps<DeepRequired<GatsbyTypes.HomePostsListQuery>, IPagination>> = ({ data, pageContext }) => {
    const posts = postPreviewsTransform(data.allPrismicPost.nodes);

    return (
        <Container my={10}>
            <PostsList posts={posts} />
            <Pagination {...pageContext} />
        </Container>
    );
};

export const Head: HeadFC = () => (
    <Seo title="Posts" />
);

export default PostsPage;

export const query = graphql`
    query PostsPage ($skip: Int!, $limit: Int!) {
        allPrismicPost (
            sort: { first_publication_date: DESC }
            skip: $skip
            limit: $limit
        ) {
            nodes {
                ...PostPreview
            }
        }
    }
`;
