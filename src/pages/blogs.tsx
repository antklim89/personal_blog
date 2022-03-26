import { Container } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/Seo';
import PostsList from '~/layouts/PostsList';
import { IPost } from '~/types';


const BlogsPage: FC<PageProps<{ allMarkdownRemark: { nodes: IPost[] } }>> = ({ data }) => {
    return (
        <>
            <Seo title="Blogs" />
            <Container maxW="container.lg" my={10}>
                <PostsList posts={data.allMarkdownRemark.nodes} />
            </Container>
        </>
    );
};

export default BlogsPage;

export const query = graphql`
  query PostsList{
    allMarkdownRemark(
        filter: {
            fileAbsolutePath: { regex: "/\\/posts\\/.*\\.md/i" },
            frontmatter: { hidden: { eq: false } }
        }
    ) {
      nodes {
        ...PostFragment
        body: excerpt(format: HTML, pruneLength: 300)
      }
    }
  }
`;
