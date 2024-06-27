import { useStaticQuery, graphql } from 'gatsby';
import { FC } from 'react';

import { SeoProps } from './types';


const Seo: FC<SeoProps> = ({
    description,
    keywords,
    title,
    image,
    children,
}) => {
    const { prismicSiteInfo: { data } } = useStaticQuery<DeepRequired<GatsbyTypes.SeoQuery>>(graphql`
        query Seo {
            prismicSiteInfo {
              data {
                author
                description
                keywords
                title
              }
            }
        }
    `);


    const metaDescription = `${data.description} ${description || ''}`.trim();
    const metaTitle = data.title;
    const metaKeywords = `${data.keywords}, ${[...(keywords || [])].join(', ')}`;

    return (
        <>
            {image
                ? (
                    <><meta content={image.src} name="og:image" />
                        <meta content={image.type} name="og:type" />
                        <meta content={`${image.width}`} name="og:width" />
                        <meta content={`${image.height}`} name="og:height" />
                    </>
                )
                : null}

            <meta content={metaKeywords} name="keywords" />
            <meta content={metaDescription} name="description" />
            <meta content={title} property="og:title" />
            <meta content={metaDescription} property="og:description" />
            <meta content="website" property="og:type" />
            <meta content="summary" name="twitter:card" />
            <meta content={data.author} name="twitter:creator" />
            <meta content={title} name="twitter:title" />
            <meta content={metaDescription} name="twitter:description" />
            <title>{`${title} | ${metaTitle}`}</title>
            {children}
        </>
    );
};

export default Seo;
