const taskMapper = require('./taskMapper');
const fs = require('fs');
const fetch = require('node-fetch');

// we want to keep enums from being expanded, so everything is generated as
// strings to prevent them from being interpreted as references

function formatTasks() {
    const writeStream = fs.createWriteStream('./src/data/tasks.js');
    writeStream.write("import { DIFFICULTY } from './constants';\n\n");
    writeStream.write('export default [\n    ');
    fetchTaskJson().then(tasks => {
        tasks.forEach(task => {
            const { category, subcategory } = taskMapper.toCategories(task);
            writeStream.write('{\n        ');
            writeStream.write(`id: ${task.id},\n        `);
            writeStream.write(`label: ${JSON.stringify(task.name)},\n        `);
            writeStream.write(`description: ${JSON.stringify(task.description)},\n        `);
            writeStream.write(`skillReqs: ${formatSkillReqs(task.skills)},\n        `);
            writeStream.write(`difficulty: DIFFICULTY.${task.tier.toUpperCase()},\n        `);
            writeStream.write(`category: ${category && `CATEGORY.${category}`},\n        `);
            writeStream.write(`subcategory: ${subcategory && `SUBCATEGORY.${subcategory}`},\n    `);
            writeStream.write('},\n    ');
        });
        writeStream.write('];');
        console.log('Successfully exported tasks to /src/data/tasks.js.');
    });
}

async function fetchTaskJson() {
    let tasks;
    await fetch('https://raw.githubusercontent.com/osrs-reldo/task-json-store/main/json/league3_tasks.json').then(
        res => {
            tasks = res.json();
        }
    );
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
