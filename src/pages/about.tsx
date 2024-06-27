import { Box, Container } from '@chakra-ui/react';
import { graphql, HeadFC, PageProps } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components';


const AboutPage: FC<PageProps<DeepRequired<GatsbyTypes.AboutQuery>>> = ({ data }) => {
    return (
        <Container my={12}>
            <Box
                dangerouslySetInnerHTML={{ __html: data.prismicSiteInfo.data.about.html }}
                sx={{ 'ul': { pl: 4 } }}
            />
        </Container>
    );
};

export const Head: HeadFC = () => (
    <Seo title="About me" />
);

export default AboutPage;

export const query = graphql`
    query About {
        prismicSiteInfo {
            data {
                about {
                    html
                }
            }
        }
    }
`;
