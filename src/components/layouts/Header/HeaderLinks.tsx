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
    {
        to: '/about',
        name: 'about',
    },
];

const HeaderLinks: FC<{readonly onClose?: () => void}> = ({ onClose }) => {
    return (
        <nav>
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
                            bgColor="rgba(0,0,0,0.3)"
                            color="white"
                            colorScheme="primary"
                            pl={[1, 2, 4]}
                            pr={[1, 2, 4]}
                            textTransform="uppercase"
                            to={to}
                            variant="solid"
                            onClick={onClose}
                        >
                            {name}
                        </Button>
                    </li>
                ))}
            </HStack>
        </nav>
    );
};

export default HeaderLinks;
