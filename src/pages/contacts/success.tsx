import { Container, Heading } from '@chakra-ui/react';
import { FC } from 'react';

import { Seo } from '~/components/Seo';


const ContactSuccessPage: FC = () => {
    return (
        <>
            <Seo title="The message was sent successfully" />
            <Container maxWidth="container.lg">
                <Heading mt={20} textAlign="center">
                    The message was sent successfully!
                </Heading>
            </Container>
        </>
    );
};

export default ContactSuccessPage;
