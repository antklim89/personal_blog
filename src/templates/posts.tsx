import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { Pagination } from '~/components/Pagination';
import { Seo } from '~/components/Seo';
import PostsList from '~/layouts/PostsList';
import { IPagination } from '~/types';
import { postTransform } from '~/utils';


const PostsPage: FC<PageProps<GatsbyTypes.PostsPageQuery, IPagination>> = ({ data, pageContext }) => {
    const posts = data.allPrismicPost.nodes.map(postTransform);

    return (
        <>
            <Seo title="Posts" />
            <Pagination {...pageContext} />
            <PostsList posts={posts} />
            <Pagination {...pageContext} />
        </>
    );
};

export default PostsPage;

export const query = graphql`
    query PostsPage ($skip: Int!, $limit: Int!) {
        allPrismicPost (
            sort: { first_publication_date: DESC }
            skip: $skip
            limit: $limit
        ) {
            nodes {
                ...Post
            }
        }
    }
`;
