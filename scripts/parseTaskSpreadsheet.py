import re
import json
import csv

# quick'n'dirty script for porting in task data from working spreadsheet I've been using for data entry (see exported .csvs in /inputs)


def parse_csv(skillName):
    task_data = {}
    all_tasks_list = []
    tasks_by_id = {}

    with open('scripts/inputs/tasks.csv') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for line in csv_reader:
            task_id = line['Id'].strip()
            area = line['Area'].strip()
            current_task = {
                'id': task_id,
                'name': line['Name'].strip(),
                'description': line['Description'].strip(),
                'difficulty': line['Difficulty'].strip(),
                'category': line['Type'].strip(),
                'subcategory': line['Subcategory'].strip(),
                'area': area,
                'additionalAreas': parse_additional_areas(line['Additional areas'].strip()),
                'skills': parse_skill_reqs(line['Skill requirements'].strip())
            }

            updated_area = task_data.get(area, [])
            updated_area.append(current_task)
            task_data.update({area: updated_area})
            all_tasks_list.append(current_task)
            tasks_by_id[task_id] = current_task

    return task_data, all_tasks_list, tasks_by_id


def parse_skill_reqs(line):
    if line == '':
        return []

    reqs = line.split(';')
    results = []
    for skill in reqs:
        skill = skill.strip()
        skillSplit = skill.split(' ')
        results.append({
            'name': skillSplit[1],
            'level': int(skillSplit[0]),
            'boostable': '(ub)' not in skill
        })
    return results


def parse_additional_areas(line):
    if line == '':
        return {}

    if 'OR' in line:
        reqs = line.split(' OR ')
        return {'oneOf': reqs}

    if 'AND' in line:
        reqs = line.split(' AND ')
        return {'allOf': reqs}

    return {'allOf': [line.strip()]}


with open('src/resources/legacy/taskData.json', 'r') as task_data_file:
    task_data = json.load(task_data_file)

tasks_by_region, all_tasks_list, tasks_by_id = parse_csv(task_data)

task_data['tasks'] = all_tasks_list
task_data['tasksByRegion'] = tasks_by_region
task_data['tasksById'] = tasks_by_id

with open('src/resources/legacy/taskData.json', 'w') as task_data_file:
    task_data_file.write(json.dumps(task_data, indent=4))
