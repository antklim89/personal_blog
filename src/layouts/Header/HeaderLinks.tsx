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
        to: '/',
        name: 'contacts',
    },
];

const HeaderLinks: FC = () => {
    return (
        <>
            {LINKS.map(({ to, name }) => (
                <li key={name}>
                    <Button
                        activeClassName="activeLink"
                        as={Link}
                        color="primary.textLight"
                        pl={4} pr={4}
                        textTransform="uppercase"
                        to={to}
                        variant="link"
                    >
                        {name}
                    </Button>
                </li>
            ))}
        </>
    );
};

export default HeaderLinks;
