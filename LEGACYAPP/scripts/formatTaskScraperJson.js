const taskMapper = require('./taskMapper');
const fs = require('fs');

// TODO:
// - prereqs should have a mapper similar to categories

// we want to keep enums from being expanded, so everything is generated as
// strings to prevent them from being interpreted as references

function formatTasks() {
  const writeStream = fs.createWriteStream('./src/data/tasks.js');
  writeStream.write("import { CATEGORY } from './categories';\n");
  writeStream.write("import { DIFFICULTY } from './constants';\n\n");
  writeStream.write("export const REGION_ANY = 'Global';\n\n");
  writeStream.write('export default {\n  ');
  fetchTaskJson().then(tasks => {
    tasks.forEach((task, index) => {
      // {{RELTaskRow|Achieve Your First Level 10|Reach level 10 in any skill (not including Agility and Hitpoints)|s=|other=|tier=easy|region=General|id=193}}
      const regex =
        /{{RELTaskRow\|(?<label>.*?)\|(?<description>.*?)\|s=(?<skills>.*?)\|(other=(?<other>(.*?))\|)?tier=(?<tier>.*?)\|region=(?<region>.*?)\|id=(?<id>.*?)}}/;
      const match = task.match(regex);
      const { label, description, skills, other, tier, region, id } = match?.groups || {};

      // Strip links from description
      // [[Goblin#Level_5|Goblin]] or [[Anvil]] or {{SCP|...}}
      const wikiSimpleLinkRegex = /\[\[([^|]+?)??\]\]/g;
      let descriptionWithoutLinks = description.replace(wikiSimpleLinkRegex, '$1');
      const wikiLinkRegex = /\[\[.*?\|(.*?)\]\]/g;
      descriptionWithoutLinks = descriptionWithoutLinks.replace(wikiLinkRegex, '$1');
      const wikiScpRegex = /\{\{SCP\|.*?\}\} /g;
      descriptionWithoutLinks = descriptionWithoutLinks.replace(wikiScpRegex, '');

      const { category, subcategory } = taskMapper.toCategories(id);
      writeStream.write(`'${id}': {\n    `);
      writeStream.write(`id: '${id}',\n    `);
      writeStream.write(`label: \`${label.replace(/[\[\]]/g, '')}\`,\n    `);
      writeStream.write(`description: \`${descriptionWithoutLinks.replace(/[\[\]]/g, '')}\`,\n    `);
      writeStream.write(`skillReqs: ${formatSkillReqs(skills)},\n    `);
      writeStream.write(`regions: ['${region}'],\n    `);
      writeStream.write(`difficulty: DIFFICULTY.${tier.toUpperCase()},\n    `);
      writeStream.write(`category: ${category && `CATEGORY.${category}`},\n    `);
      writeStream.write(`subcategory: ${subcategory && `CATEGORY.${category}.subcategories.${subcategory}`},\n    `);
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
    return stringifyArray(
      skillReqs
        .split(', ')
        .map(skill => {
          // {{SCP|Firemaking|15|link=yes}}
          const match = skill.match(/{{SCP\|(?<skillName>(.*?))\|(?<level>(.*?))\|.*/);
          if (match) {
            return `{skill: '${match.groups.skillName}',level: ${parseInt(match.groups.level)}}`;
          }
          return null;
        })
        .filter(skill => !!skill)
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
