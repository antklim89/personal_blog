import {
    Alert, AlertIcon, Box, Button, Input, Text, Textarea,
} from '@chakra-ui/react';
import { FC, FormEventHandler, useState } from 'react';


const Contacts: FC = () => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'success' | 'error' | null>(null);

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setLoading(true);

        const body = new FormData(e.currentTarget);
        const response = await fetch('/', { method: 'POST', body });

        if (response.ok) {
            setStatus('success');
            (e?.target as HTMLFormElement)?.reset?.();
        } else setStatus('error');

        setLoading(false);
    };

    return (
        <Box as="section">
            <Text fontSize="5xl" textAlign="center">
                Have a question?<br />Contact me.
            </Text>

            {status
                ? (
                    <Alert my={4} status={status}>
                        <AlertIcon />
                        {status === 'success' && 'The message has been sent successfully'}
                        {status === 'error' && 'Unexpected error. Try again later.'}
                    </Alert>
                )
                : null}

            <form
                data-netlify="true"
                name="contact"
                // eslint-disable-next-line react/no-unknown-property
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
            >
                <Box
                    display="flex"
                    flexDir="column"
                >
                    <Box as="label" display="none">
                        Don’t fill this out if you’re human: <input name="bot-field" />
                    </Box>
                    <Input
                        required
                        maxLength={100}
                        mb={4}
                        minLength={3}
                        name="name"
                        placeholder="Your name"
                        type="text"
                    />
                    <Input
                        required
                        maxLength={200}
                        mb={4}
                        minLength={3}
                        name="subject"
                        placeholder="Your message subject"
                        type="subject"
                    />
                    <Textarea
                        required
                        maxLength={2000}
                        mb={4}
                        minLength={10}
                        name="message"
                        placeholder="Your message"
                        resize="none"
                        rows={5}
                    />
                    <input name="form-name" type="hidden" value="contact" />
                    <Button
                        colorScheme="primary"
                        disabled={loading}
                        isLoading={loading}
                        loadingText="Sending"
                        type="submit"
                    >
                        Send
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default Contacts;

