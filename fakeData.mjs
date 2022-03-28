import fs from 'fs';
import path from 'path';


const postsPath = path.resolve('src/content/posts');

// if (!fs.existsSync(postPath)) {
if (true) {
    fs.mkdirSync(postsPath, { recursive: true });
    
    for (let index = 0; index < 5; index++) {

        const title = `Semper eget duis ${Math.random()}`;
        const fileName = `${title}.md`;


        const post = `
---
hidden: false
title: ${title}
createdAt: 2022-03-24T16:34:17.340Z
imagePreview: images/yana-marudova-q4vustngxm8-unsplash.jpg
---
Tristique senectus at nam at
        `;

        fs.writeFileSync(path.resolve(postsPath, fileName), post);
    }

}
