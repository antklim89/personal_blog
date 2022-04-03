import { Container } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/Seo';
import Hero from '~/layouts/Hero';
import PostsList from '~/layouts/PostsList';
import { IPost } from '~/types';


const HomePage: FC<PageProps<{ allMarkdownRemark: { nodes: IPost[] } }>> = ({ data }) => {
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
  query HomePostsList{
    allMarkdownRemark(
        filter: {
            fileAbsolutePath: { regex: "/\\/posts\\/.*\\.md/i" },
            frontmatter: { hidden: { eq: false } }
        },
        sort: { fields: [frontmatter___createdAt], order: DESC }
        limit: 10,
    ) {
      nodes {
        ...PostFragment
        body: excerpt(format: HTML, pruneLength: 300)
      }
    }
  }


fragment PostFragment on MarkdownRemark {
    frontmatter {
        title
        hidden
        createdAt(fromNow: true)
        imagePreview {
            childImageSharp {
                gatsbyImageData(
                    width: 900
                    height: 270
                    placeholder: BLURRED
                    layout: CONSTRAINED
                )
                resize(toFormat: PNG, width: 640, height: 480) {
                    width
                    src
                    height
                }
            }
        }
    }
    id
}
`;
