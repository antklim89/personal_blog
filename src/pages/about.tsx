import { Container, Text } from '@chakra-ui/react';
import { graphql, HeadFC, PageProps } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/Seo';


const AboutPage: FC<PageProps<DeepRequired<DeepRequired<GatsbyTypes.AboutQuery>>>> = ({ data }) => {

    return (
        <Container my={12}>
            <Text
                dangerouslySetInnerHTML={{ __html: data.prismicAbout.data.text.html }}
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
        prismicAbout {
            data {
                text {
                    html
                }
            }
        }
    }
`;
