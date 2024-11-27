const taskMapper = require('./taskMapper');
const fs = require('fs');

// TODO:
// - categories temporarily disabled, mapper values need to be manually updated
// - prereqs should have a mapper similar to categories

// we want to keep enums from being expanded, so everything is generated as
// strings to prevent them from being interpreted as references

function formatTasks() {
  const writeStream = fs.createWriteStream('./src/data/tasks.js');
  writeStream.write("import { CATEGORY } from './categories';\n");
  writeStream.write("import { DIFFICULTY } from './constants';\n\n");
  writeStream.write("export const REGION_ANY = 'General';\n\n");
  writeStream.write('export default {\n  ');
  fetchTaskJson().then(tasks => {
    tasks.forEach((task, index) => {
      // {{RELTaskRow|Achieve Your First Level 10|Reach level 10 in any skill (not including Agility and Hitpoints)|s=|other=|tier=easy|region=General|id=193}}
      const regex =
        /{{RELTaskRow\|(?<label>.*?)\|(?<description>.*?)\|s=(?<skills>.*?)\|(other=(?<other>(.*?))\|)?tier=(?<tier>.*?)\|region=(?<region>.*?)\|id=(?<id>.*?)}}/;
      const match = task.match(regex);
      const { label, description, skills, other, tier, region, id } = match?.groups || {};
      // const { category, subcategory } = taskMapper.toCategories(task);
      writeStream.write(`'${id}': {\n    `);
      writeStream.write(`id: '${id}',\n    `);
      writeStream.write(`label: \`${label.replace(/[\[\]]/g, '')}\`,\n    `);
      writeStream.write(`description: \`${description.replace(/[\[\]]/g, '')}\`,\n    `);
      writeStream.write(`skillReqs: ${formatSkillReqs(skills)},\n    `);
      writeStream.write(`regions: ['${region}'],\n    `);
      writeStream.write(`difficulty: DIFFICULTY.${tier.toUpperCase()},\n    `);
      writeStream.write(`category: CATEGORY.OTHER,\n    `);
      writeStream.write(`subcategory: CATEGORY.OTHER.subcategories.GENERAL,\n    `);
      // writeStream.write(`category: ${category && `CATEGORY.${category}`},\n    `);
      // writeStream.write(`subcategory: ${subcategory && `CATEGORY.${category}.subcategories.${subcategory}`},\n    `);
      writeStream.write("prerequisite: '',\n  ");
      writeStream.write('},\n  ');
    });
    writeStream.write('};');
    console.log('Successfully exported tasks to /src/data/tasks.js.');
  });
}

async function fetchTaskJson() {
  const data = fs.readFileSync('./scripts/wikiTaskData.txt', 'utf8').split('\n');
  return data;
}

function formatSkillReqs(skillReqs) {
  if (skillReqs) {
    console.log(skillReqs);
    return stringifyArray(
      skillReqs.split(', ').map(skill => {
        console.log({ skill });
        // {{SCP|Firemaking|15|link=yes}}
        const match = skill.match(/{{SCP\|(?<skillName>(.*?))\|(?<level>(.*?))\|.*/);
        console.log(match);
        if (match) {
          return `{skill: '${match.groups.skillName}',level: ${parseInt(match.groups.level)}}`;
        } else return '';
      })
    );
  } else {
    return '[]';
  }
}

function stringifyArray(arr) {
  // because JSON.stringify does annoying things like escaping quotes
  if (arr.length) {
    return `[${arr.join(',\n')}]`;
  } else return '[]';
}

formatTasks();
