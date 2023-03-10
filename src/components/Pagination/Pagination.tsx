import { Box, Button, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { FC } from 'react';

import { IPagination } from '~/types';


export const Pagination: FC<IPagination> = ({
    previousPagePath,
    nextPagePath,
    humanPageNumber,
    numberOfPages,
}) => {
    if (numberOfPages === 1) return null;
    return (
        <Box display="flex" justifyContent="center" my={4}>
            {previousPagePath.length === 0
                ? (
                    <Button isDisabled>
                        Previous
                    </Button>
                )
                : (
                    <Button as={Link} to={previousPagePath}>
                        Previous
                    </Button>
                )}
            <Text
                as="span"
                color="primary.600"
                fontSize="xl"
                px={10}
            >
                {humanPageNumber}
            </Text>
            {nextPagePath.length === 0
                ? (
                    <Button isDisabled>
                        Next
                    </Button>
                )
                : (
                    <Button as={Link} to={nextPagePath}>
                        Next
                    </Button>
                )}
        </Box>
    );
};
