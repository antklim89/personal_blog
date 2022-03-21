import { PageProps } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/Seo';


const BlogsPage: FC<PageProps> = () => {
    return (
        <>
            <Seo title="Blogs" />
            <div>BLOGS</div>
        </>
    );
};

export default BlogsPage;

