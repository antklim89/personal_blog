/* eslint-disable */

/**
 * @type { import('netlify-cms-core').CmsCollectionFile }
 */
export const hero = {
    label: 'Hero',
    name: 'hero',
    file: 'src/content/hero/hero.md',
    media_folder: 'images/',
    fields: [
        {
            name: 'layout',
            widget: 'hidden',
            default: 'hero'
        },
        {
            name: 'body',
            widget: 'markdown',
        },
        {
            name: 'background',
            widget: 'image',
        },
        {
            name: 'portrait',
            widget: 'image',
        },
    ],
};
