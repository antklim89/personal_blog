import { FC } from 'react';
import { Helmet } from 'react-helmet';

import { SeoProps } from './types';

import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from '~/constants';


export const Seo: FC<SeoProps> = ({
    description,
    meta = [],
    keywords = [],
    title,
    image,
}) => {
    const defaultDescription = `${DEFAULT_DESCRIPTION} ${description || ''}`.trim();
    const defaultTitle = `${title ? `${title} | ` : ''}${DEFAULT_TITLE}`;

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
                    content: [...keywords].join(', '),
                },
                {
                    name: 'description',
                    content: defaultDescription,
                },
                {
                    property: 'og:title',
                    content: title,
                },
                {
                    property: 'og:description',
                    content: defaultDescription,
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
                    content: defaultDescription,
                },
                
            ]}
            title={defaultTitle}
        />
    );
};
