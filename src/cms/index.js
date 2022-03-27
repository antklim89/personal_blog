/* eslint-disable */
import { init } from 'netlify-cms-app';

import { about } from './about';
import { posts } from './posts';
import { metadata } from './metadata';
import { hero } from './hero';
import { social } from './social';


init({
    config: {
        load_config_file: false,

        // site_url: 'https://cozy-clothing.netlify.app',

        backend: {
            name: 'git-gateway',
            branch: 'main',
        },
        local_backend: { allowed_hosts: ['192.168.0.123', '192.168.90.18', '192.168.90.19', '127.0.0.1'] },
        publish_mode: 'editorial_workflow',
        media_folder: 'src/content/uploaded/',
        collections: [
            posts,
            {
                label: 'Site',
                name: 'site',
                editor: { preview: false },
                files: [
                    about,
                    metadata,
                    hero,
                    social
                ],
            },
        ],
    },
});

