/* eslint-disable */

/**
 * @type { import('netlify-cms-core').CmsCollectionFile }
 */
export const metadata = {
    label: 'Metadata',
    name: 'metadata',
    file: 'src/content/metadata/metadata.json',
    media_folder: 'images/',
    fields: [
        {
            name: 'title',
            widget: 'string',
            default: 'Home',
        },
        {
            name: 'description',
            widget: 'text',
        },
        {
            name: 'keywords',
            widget: 'list',
        },
    ],
};
