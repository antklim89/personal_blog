import fs from 'fs';
import path from 'path';

import { faker } from '@faker-js/faker';
import _ from 'lodash';


const POSTS_QTY = 10;

const postsPath = path.resolve('src/content/posts');


fs.mkdirSync(postsPath, { recursive: true });
    
for (let index = 0; index < POSTS_QTY; index++) {

    const title = _.upperFirst(faker.lorem.words(3));
    const fileName = `${_.kebabCase(title)}.md`;


    const post = `---
hidden: false
title: ${title}
createdAt: ${faker.date.between('2020-01-01T00:00:00.000Z', new Date().toISOString()).toISOString()}
imagePreview: images/image${_.random(1, 5)}.jpg
---
${faker.lorem.paragraph(_.random(20, 100))}

${faker.lorem.paragraph(_.random(20, 100))}

${faker.lorem.paragraph(_.random(20, 100))}

${faker.lorem.paragraph(_.random(20, 100))}
        `;

    fs.writeFileSync(path.resolve(postsPath, fileName), post);
}

