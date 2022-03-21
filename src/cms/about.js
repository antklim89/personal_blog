/* eslint-disable */

/**
 * @type { import('netlify-cms-core').CmsCollectionFile }
 */
export const about = {
    label: 'About',
    name: 'about',
    file: 'src/content/about/about.json',
    media_folder: 'images/',
    fields: [
        {
            name: 'text',
            widget: 'markdown',
        },
        {
            name: 'image',
            widget: 'image',
        },
    ],
};
