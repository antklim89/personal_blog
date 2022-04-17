import { Container } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/Seo';
import Hero from '~/layouts/Hero';
import PostsList from '~/layouts/PostsList';
import { IPost } from '~/types';


const HomePage: FC<PageProps<{ allGraphCmsPost: { nodes: IPost[] } }>> = ({ data }) => {
    return (
        <>
            <Seo title="Home" />
            <Hero />
            <Container maxW="container.lg" my={10}>
                <PostsList posts={data.allGraphCmsPost.nodes} />
            </Container>
        </>
    );
};

export default HomePage;

export const query = graphql`
  query HomePostsList{
    allGraphCmsPost(
        sort: { fields: createdAt, order: DESC }
        limit: 10,
    ) {
        nodes {
            ...PostFragment
            bodyPreview
        }
    }
  }


fragment PostFragment on GraphCMS_Post {
    id
    title
    imagePreview {
        gatsbyImageData(
            width: 900
            height: 270
            placeholder: BLURRED
            layout: CONSTRAINED
        )
        url
        width
        height
    }
}
`;
