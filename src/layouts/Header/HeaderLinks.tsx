import { Button, HStack } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { FC } from 'react';


const LINKS = [
    {
        to: '/',
        name: 'home',
    },
    {
        to: '/contacts',
        name: 'contacts',
    },
];

const HeaderLinks: FC<{onClose?: () => void}> = ({ onClose }) => {
    return (
        <HStack
            as="ul"
            justifyContent="flex-end"
            listStyleType="none"
        >
            {LINKS.map(({ to, name }) => (
                <li key={name}>
                    <Button
                        activeClassName="activeLink"
                        as={Link}
                        color="primary.textLight"
                        pl={[1,2,4]} pr={[1,2,4]}
                        textTransform="uppercase"
                        to={to}
                        variant="link"
                        onClick={onClose}
                    >
                        {name}
                    </Button>
                </li>
            ))}
        </HStack>
    );
};

export default HeaderLinks;
