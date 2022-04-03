import { Box, Button, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { FC } from 'react';

import { PaginationPropTypes } from './types';


export const Pagination: FC<PaginationPropTypes> = ({
    previousPagePath,
    nextPagePath,
    humanPageNumber,
    numberOfPages,
}) => {
    if (numberOfPages === 1) return null;
    return (
        <Box display="flex" justifyContent="center" mb={4}>
            {previousPagePath.length === 0
                ? (
                    <Button disabled colorScheme="primary">
                        Previous
                    </Button>
                )
                : (
                    <Button
                        as={Link}
                        colorScheme="primary"
                        to={previousPagePath}
                    >
                        Previous
                    </Button>
                )}
            <Text
                as="span" 
                color='primary.600'
                fontSize="xl"
                px={10}
            >
                {humanPageNumber}
            </Text>  
            {nextPagePath.length === 0
                ? (
                    <Button disabled colorScheme="primary">
                        Next
                    </Button>
                )
                : (
                    <Button
                        as={Link}
                        colorScheme="primary"
                        to={nextPagePath}
                    >
                        Next
                    </Button>
                )}
        </Box>
    );
};
