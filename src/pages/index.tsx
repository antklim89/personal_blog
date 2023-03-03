import { Button, Container } from '@chakra-ui/react';
import { graphql, Link, PageProps } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/Seo';
import Hero from '~/layouts/Hero';
import PostsList from '~/layouts/PostsList';
import { postPreviewsTransform } from '~/transforms';


const HomePage: FC<PageProps<DeepRequired<GatsbyTypes.HomePostsListQuery>>> = ({ data }) => {
    const posts = postPreviewsTransform(data.allPrismicPost.nodes);

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
    query HomePostsList {
        allPrismicPost {
            nodes {
                ...PostPreview
            }
        }
    }

    fragment BasePost on PrismicPost {
        id
        first_publication_date
        data {
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

    fragment PostPreview on PrismicPost {
        ...BasePost
        data {
            bodypreview
        }
    }

    fragment Post on PrismicPost {
        ...BasePost
        data {
            body {
                html
            }
        }
    }
`;
