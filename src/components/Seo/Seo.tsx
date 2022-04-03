import { useStaticQuery, graphql } from 'gatsby';
import { FC } from 'react';
import { Helmet } from 'react-helmet';

import { SeoProps, SeoQuery } from './types';


export const Seo: FC<SeoProps> = ({
    description,
    meta = [],
    keywords = [],
    title,
    image,
}) => {
    const { metadata } = useStaticQuery<SeoQuery>(graphql`
        query Seo {
            metadata: metadataJson {
                title
                description
                keywords
            }
        }

    `);

    const metaDescription = `${metadata.description} ${description || ''}`.trim();
    const metaTitle = metadata.title;

    const imageMeta = image
        ? [{
            name: 'og:image',
            content: image.src,
        },
        {
            name: 'og:image:type',
            content: image.type,
        },
        {
            name: 'og:image:width',
            content: image.width,
        },
        {
            name: 'og:image:height',
            content: image.height,
        }]
        : [];

    return (
        <Helmet
            htmlAttributes={{ lang: 'en' }}
            meta={[
                ...meta,
                ...imageMeta,
                {
                    name: 'keywords',
                    content: [...metadata.keywords, ...keywords].join(', '),
                },
                {
                    name: 'description',
                    content: metaDescription,
                },
                {
                    property: 'og:title',
                    content: title,
                },
                {
                    property: 'og:description',
                    content: metaDescription,
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
                {
                    name: 'twitter:card',
                    content: 'summary',
                },
                {
                    name: 'twitter:description',
                    content: metaDescription,
                },
                
            ]}
            title={title}
            titleTemplate={metaTitle && `%s | ${metaTitle}`}
        />
    );
};
