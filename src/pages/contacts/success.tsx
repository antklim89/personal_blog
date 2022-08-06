import { Button, Container, Heading } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/Seo';


const ContactSuccessPage: FC = () => {
    return (
        <>
            <Seo title="The message was sent successfully" />
            <Container display="flex" flexDirection="column">
                <Heading mt={20} textAlign="center">
                    The message was sent successfully!
                </Heading>
                <Button
                    alignSelf="center" as={Link} colorScheme="primary"
                    mt={10} to="/contacts"
                >
                    Go Back
                </Button>
            </Container>
        </>
    );
};

export default ContactSuccessPage;
