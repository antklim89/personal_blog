import { Container } from '@chakra-ui/react';
import { PageProps } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/ui/Seo';
import Contacts from '~/components/features/Contacts';


const ContactsPage: FC<PageProps> = () => {
    return (
        <>
            <Seo title="Contacts" />
            <Container>
                <Contacts />
            </Container>
        </>
    );
};

export default ContactsPage;

