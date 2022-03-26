import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/Seo';


const PostPage: FC<PageProps> = () => {


    return (
        <>
            <Seo title="Post" />
            <h1>POST</h1>
        </>
    );
};

export default PostPage;

export const query = graphql`
    query PostPage($id: String!) {
        markdownRemark(id: {eq: $id}) {
            ...PostFragment
        }
    }
`;
