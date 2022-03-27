import { Button } from '@chakra-ui/react';
import { Link } from 'gatsby';


const HeaderLinks = () => {
    return (
        <>
            <li>
                <Button
                    activeClassName="activeLink"
                    as={Link}
                    color="primary.textLight"
                    pl={4} pr={4}
                    to="/"
                    variant="link"
                >
                    HOME
                </Button>
            </li>
            <li>
                <Button
                    activeClassName="activeLink"
                    as={Link}
                    color="primary.textLight"
                    pl={4} pr={4}
                    to="/posts"
                    variant="link"
                >
                    POSTS
                </Button>
            </li>
            <li>
                <Button
                    activeClassName="activeLink"
                    as={Link}
                    color="primary.textLight"
                    pl={4} pr={4}
                    to="/contacts"
                    variant="link"
                >
                    CONTACTS
                </Button>
            </li>
        </>
    );
};

export default HeaderLinks;
