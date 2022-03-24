import { PageProps } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/Seo';
import Hero from '~/layouts/Hero';


const HomePage: FC<PageProps> = () => {
    return (
        <>
            <Seo title="Home" />
            <Hero />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque commodi quibusdam molestiae est ipsum totam labore! Provident soluta illum tenetur sunt tempore. Amet laboriosam vero laborum at odit tenetur commodi.
        </>
    );
};

export default HomePage;

