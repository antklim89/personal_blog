import { Box, Button, Heading, Input, Textarea } from '@chakra-ui/react';
import { FC } from 'react';


const Contacts: FC = () => {

    return (
        <Box as="section">
            <Heading as="h1" my={4}>
                Contact me
            </Heading>
            <Box
                as="form"
                data-netlify="true"
                display="flex" 
                flexDir="column"
                method="post"
                name="contact"
                netlify-honeypot="bot-field"
            >
                <Input
                    mb={4}
                    name="name"
                    placeholder="Your name"
                    type="text"
                />
                <Input
                    mb={4}
                    name="theme"
                    placeholder="Your message theme"
                    type="text"
                />
                <Textarea
                    mb={4}
                    name="message"
                    placeholder="Your message"
                    resize="none"
                    rows={5}
                />
                <Button
                    colorScheme="primary"
                    type="submit"
                >
                    Send
                </Button>
            </Box>
        </Box>
    );
};

export default Contacts;

