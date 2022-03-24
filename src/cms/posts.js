/* eslint-disable */


/**
 * @type { import('netlify-cms-core').CmsCollection }
 */
export const posts = {
    name: 'posts',
    label: 'Posts',
    folder: 'src/content/posts',
    create: true,
    slug: '{{type}}-{{category}}-{{title}}',
    media_folder: 'images',
    extension: 'md',
    editor: { preview: false },
    fields: [
        {
            label: 'Hidden',
            name: 'hidden',
            widget: 'boolean',
            default: false,
        },
        {
            label: 'Title',
            name: 'title',
            widget: 'string',
        },
        {
            label: 'Created Date',
            name: 'createdAt',
            widget: 'datetime',
        },
        {
            label: 'Body',
            name: 'body',
            widget: 'markdown',
        },
        {
            label: 'Image Preview',
            name: 'imagePreview',
            widget: 'image',
            required: true,
        }
    ],
}

