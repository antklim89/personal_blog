import { PageProps } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/Seo';


const AboutPage: FC<PageProps> = () => {
    return (
        <>
            <Seo title="About" />
            <div>ABOUT</div>
        </>
    );
};

export default AboutPage;

