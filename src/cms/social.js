/* eslint-disable */

/**
 * @type { import('netlify-cms-core').CmsCollectionFile }
 */
export const social = {
    label: 'Social Icons',
    name: 'social',
    file: 'src/content/social/social.json',
    media_folder: 'images/',
    fields: [
        {
            name: 'social',
            widget: 'list',
            fields: [
                {
                    name: 'name',
                    widget: 'string',
                },
                {
                    name: 'link',
                    widget: 'string',
                },
                {
                    name: 'icon',
                    widget: 'image',
                }
            ]
        },
    ],
};
