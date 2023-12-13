import inquirer from 'inquirer';
import fs from 'fs';
import {url} from 'inspector';

const getCommonInfo = () => {
  return inquirer
    .prompt([
      {
        name: 'langs',
        type: 'checkbox',
        message: 'Which languages will be published:',
        choices: ['ES', 'EN'],
      },
      {
        name: "date",
        message: "Date (YYYY-MM-DD): "
      }
    ])
}

const getTitle = (lang) => {
  return inquirer
    .prompt([
      {
        name: "title",
        message: `Title (${lang}):`,
      },
    ])
}

const getDescription = (lang) => {
  return inquirer
    .prompt([
      {
        name: "description",
        message: `Description (${lang}):`,
      },
    ])
}

const makeUrlFriendly = (inputString) => {
  const normalizedString = inputString.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return normalizedString.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
};

const getPath = (lang) => `${lang === 'ES' ? '' : lang.toLowerCase()}/blog`;

const createDirectory = (dir, lang) => {
  fs.mkdir(`./_views/${getPath(lang)}/${dir}`, (error) => {
    if (error) {
      return 'Directory already exist';
    } else {
      return `Created ${dir}`;
    }
  });
};

const createPost = (post) => {
  const contentLangs = (currentLang) => {
    let content = ''
    for (const lang in post) {
      if (lang !== currentLang)
        content += `\n${lang.toLowerCase()}: ${lang !== 'ES' ? '/' : ''}${getPath(lang)}/${post[lang].url}`
    }
     return content;
  }

  for (const lang in post) {
    const {
      title,
      date,
      description,
      url,
    } = post[lang];

    const content = `---
title: "${title}"
date: ${date}
description: "${description}"
${contentLangs(lang)}
---
    `;

    fs.writeFile(`_views/${getPath(lang)}/${url}/index.md`, content, (error) => {
      if (!error) console.log('New post created');
    });
  }

}

(async () => {
  const {langs, date} = await getCommonInfo();
  const post = {};
  const year = date.split('-')[0];
  const month = date.split('-')[1];

  for (const lang of langs) {
    const {title} = await getTitle(lang)
    const {description} = await getDescription(lang);

    createDirectory(year, lang);
    createDirectory(`${year}/${month}`, lang);
    createDirectory(`${year}/${month}/${makeUrlFriendly(title)}`, lang)

    post[lang] = {
      title,
      url: `${year}/${month}/${makeUrlFriendly(title)}`,
      date,
      description,
    }
  }
   createPost(post);
})();
