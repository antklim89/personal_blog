import { Box, Button, Input, Text, Textarea } from '@chakra-ui/react';
import { FC } from 'react';


const Contacts: FC = () => {

    return (
        <Box as="section">
            <Text fontSize='5xl' textAlign="center">
                Have a question?<br />Send me a message.
            </Text>
            <Box
                action='/contacts/success'
                as="form"
                data-netlify="true"
                display="flex" 
                flexDir="column"
                method="post"
                name="contact"
                netlify-honeypot="bot-field"
            >
                <Box as="label" display="none">
                    Don’t fill this out if you’re human: <input name="bot-field" />
                </Box>
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
                <input name="form-name" type="hidden" value="contact" />
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

