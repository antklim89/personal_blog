import { Container } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/Seo';
import Hero from '~/layouts/Hero';
import PostsList from '~/layouts/PostsList';
import { Post } from '~/types';


const HomePage: FC<PageProps<{ allMarkdownRemark: { nodes: Post[] } }>> = ({ data }) => {

    return (
        <>
            <Seo title="Home" />
            <Hero />
            <Container maxW="container.lg" my={10}>
                <PostsList posts={data.allMarkdownRemark.nodes} />
            </Container>
        </>
    );
};

export default HomePage;

export const query = graphql`
  query PostsList{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/\\/posts\\/.*\\.md/i"}}) {
      nodes {
        frontmatter {
          title
          hidden
          createdAt(fromNow: true)
          imagePreview {
            childImageSharp {
              gatsbyImageData(
                width: 270
                height: 400
                placeholder: BLURRED
                layout: CONSTRAINED
              )
            }
          }
        }
        id
        body: excerpt(format: HTML, pruneLength: 300)
      }
    }
  }
`;
