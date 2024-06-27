import { ChevronUpIcon } from '@chakra-ui/icons';
import { Button, Flex } from '@chakra-ui/react';
import { FC, useCallback, useEffect, useState } from 'react';


const GoTopButton: FC = () => {
    const goTop = useCallback(() => {
        document.body.scrollTop = 0;
    }, []);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const { scrollHeight, clientHeight } = document.body;
        setShow(scrollHeight > clientHeight);
    }, []);

    if (!show) return null;
    return (
        <Flex alignSelf="center" mt={50}>
            <Button colorScheme="primary" px={8} onClick={goTop}>
                <ChevronUpIcon />
            </Button>
        </Flex>
    );
};

export default GoTopButton;
