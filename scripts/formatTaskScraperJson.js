const taskMapper = require('./taskMapper');
const fs = require('fs');
const fetch = require('node-fetch');

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
      // const { category, subcategory } = taskMapper.toCategories(task);
      writeStream.write(`'${task.id}': {\n    `);
      writeStream.write(`id: '${task.id}',\n    `);
      writeStream.write(`label: ${JSON.stringify(task.name)},\n    `);
      writeStream.write(`description: ${JSON.stringify(task.description)},\n    `);
      writeStream.write(`skillReqs: ${formatSkillReqs(task.skills)},\n    `);
      writeStream.write(`regions: [${JSON.stringify(task.area)}],\n    `);
      writeStream.write(`difficulty: DIFFICULTY.${task.tier.toUpperCase()},\n    `);
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
  let tasks;
  await fetch('https://raw.githubusercontent.com/osrs-reldo/task-json-store/main/json/league4_tasks.json').then(res => {
    tasks = res.json();
  });
  return tasks;
}

function formatSkillReqs(skillReqs) {
  return stringifyArray(skillReqs.map(({ skill, level }) => `{skill: '${skill}',level: ${parseInt(level)}}`));
}

function stringifyArray(arr) {
  // because JSON.stringify does annoying things like escaping quotes
  return `[${arr.join(',\n')}]`;
}

formatTasks();
