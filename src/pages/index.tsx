import { Button, Container } from '@chakra-ui/react';
import { graphql, Link, PageProps } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/Seo';
import Hero from '~/layouts/Hero';
import PostsList from '~/layouts/PostsList';
import { postTransform } from '~/utils';


const HomePage: FC<PageProps<GatsbyTypes.HomePostsListQuery>> = ({ data }) => {
    const posts = data.allPrismicPost.nodes.map(postTransform);

    return (
        <>
            <Seo title="Home" />
            <Hero />
            <Container my={10}>
                <PostsList posts={posts} />
                <Button
                    as={Link}
                    colorScheme="primary"
                    to="/posts/2"
                    width="100%"
                >
                    Show more posts...
                </Button>
            </Container>
        </>
    );
};

export default HomePage;


export const query = graphql`
  query HomePostsList{
    allPrismicPost {
      nodes {
        ...Post
      }
    }
  }

  fragment Post on PrismicPost {
    id
    createdAt: first_publication_date
    data {
      body {
        html
      }
      imagepreview {
        dimensions {
          width
          height
        }
        url
        gatsbyImageData
      }
      title {
        text
      }
    }
  }
`;
