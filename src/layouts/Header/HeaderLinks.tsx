import { Button } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { FC } from 'react';


const LINKS = [
    {
        to: '/',
        name: 'home',
    },
    {
        to: '/posts',
        name: 'posts',
    },
    {
        to: '/contacts',
        name: 'contacts',
    },
];

const HeaderLinks: FC<{onClose?: () => void}> = ({ onClose }) => {
    return (
        <>
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
        </>
    );
};

export default HeaderLinks;
