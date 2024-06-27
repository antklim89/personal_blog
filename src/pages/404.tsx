import { HeadFC } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/ui/Seo';


const NotFoundPage: FC = () => (
    <>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
);


export const Head: HeadFC = () => (
    <Seo title="404: Not found" />
);

export default NotFoundPage;
