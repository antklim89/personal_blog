import { Box, Heading, Input, Textarea } from '@chakra-ui/react';
import { FC } from 'react';

import { ContactsProps } from './Contacts.types';


const Contacts: FC<ContactsProps> = () => {

    return (
        <Box as="section">
            <Heading as="h1" my={4}>
                Contact me
            </Heading>
            <Box as="form">
                <Input
                    mb={4}
                    placeholder="Your name"
                    type="text"
                />
                <Input
                    mb={4}
                    placeholder="Your email"
                    type="email"
                />
                <Textarea
                    mb={4}
                    placeholder="Your message"
                    resize="none"
                    rows={5}
                />
            </Box>
        </Box>
    );
};

export default Contacts;

