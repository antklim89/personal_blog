import fs from 'node:fs';
import path from 'node:path';
import { faker } from '@faker-js/faker';
import _ from 'lodash';


const START_DATE = '1989-01-01T00:00:00.000Z';
const NEWS_NUMBER = 50;

/**
 * Posts
 */
const postsDir = path.resolve('src/content/blog');
const postImages = fs.readdirSync(path.resolve('seed/images'))
  .map(fileName => path.join(`../../../../seed/images`, fileName));


for (let index = 0; index < NEWS_NUMBER; index += 1) {
  const title = faker.lorem.words({ min: 3, max: 10 });
  const pubDate = faker.date.between({ from: START_DATE, to: new Date() });

  const markdown = `---
title: "${title}"
pubDate: ${pubDate.toISOString()}
description: "${faker.lorem.paragraph({ min: 5, max: 10 })}"
heroImage: "${_.sample(postImages)}"
---

${generateMarkdown({ images: postImages })}
`;

  fs.mkdirSync(path.resolve(postsDir, _.kebabCase(title)), { recursive: true });
  fs.writeFileSync(path.resolve(postsDir, _.kebabCase(title), 'post.md'), markdown);
}


function generateMarkdown({ images }) {
  const arr = [
    () => `## ${faker.lorem.words({ min: 3, max: 10 })}`,
    () => `### ${faker.lorem.words({ min: 3, max: 10 })}`,
    () => `#### ${faker.lorem.words({ min: 3, max: 10 })}`,
    () => `${faker.lorem.paragraph({ min: 5, max: 50 })}`,
    () => `${faker.lorem.paragraph({ min: 5, max: 100 })}`,
    () => `${faker.lorem.paragraph({ min: 5, max: 25 })}`,
    () => `${faker.lorem.paragraph({ min: 5, max: 75 })}`,
    () => `${faker.lorem.paragraph({ min: 5, max: 50 })}`,
    () => `***${faker.lorem.paragraph({ min: 5, max: 10 })}***`,
    () => `*${faker.lorem.paragraph({ min: 5, max: 10 })}*`,
    () => `[${faker.lorem.words({ min: 3, max: 5 })}](${faker.internet.url()})`,
    () => `![${faker.lorem.words({ min: 3, max: 5 })}](${_.sample(images)})`,
    () => `![${faker.lorem.words({ min: 3, max: 5 })}](${_.sample(images)})`,
    () => `![${faker.lorem.words({ min: 3, max: 5 })}](${_.sample(images)})`,
    () => `> ${faker.lorem.paragraph({ min: 5, max: 10 })}`,
    () => _.times(5, () => `- ${faker.lorem.sentence({ min: 3, max: 5 })}\n`).join(''),
  ];


  return _.shuffle(arr).map(fn => fn()).join('\n\n');
}

