import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { Pagination } from '~/components/Pagination';
import { Seo } from '~/components/Seo';
import PostsList from '~/layouts/PostsList';
import { IPagination, IPost } from '~/types';


const PostsPage: FC<PageProps<{ allGraphCmsPost: { nodes: IPost[] } }, IPagination>> = ({ data, pageContext }) => {
    return (
        <>
            <Seo title="Posts" />
            <Pagination {...pageContext} />
            <PostsList posts={data.allGraphCmsPost.nodes} />
            <Pagination {...pageContext} />
        </>
    );
};

export default PostsPage;

export const query = graphql`
    query PostsList ($skip: Int!, $limit: Int!) {
        allGraphCmsPost(
            sort: { fields: createdAt, order: DESC }
            skip: $skip
            limit: $limit
        ) {
            nodes {
                ...PostFragment
                bodyPreview
            }
        }
    }
`;
