/* eslint-disable */

/**
 * @type { import('netlify-cms-core').CmsCollectionFile }
 */
export const hero = {
    label: 'Hero',
    name: 'hero',
    file: 'content/hero/hero.json',
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
