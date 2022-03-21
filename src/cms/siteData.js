/* eslint-disable */

/**
 * @type { import('netlify-cms-core').CmsCollectionFile }
 */
export const siteData = {
    label: 'Site Data',
    name: 'siteData',
    file: 'content/siteData/siteData.json',
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
