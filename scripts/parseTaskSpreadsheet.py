import re
import json

# quick'n'dirty script for porting in task data from working spreadsheet I've been using for data entry (see exported .csvs in /inputs)


def parse_csv(skillName):
    IS_HEADER_LINE = True
    task_data = {}
    all_tasks_list = []
    tasks_by_id = {}

    csv_file = open('scripts/inputs/tasks.csv', "r")
    for line in csv_file:
        if IS_HEADER_LINE:
            IS_HEADER_LINE = False
            continue

        line = line.strip()
        line_split = line.split(',')

        task_id = line_split[0].strip()
        area = line_split[5].strip()
        current_task = {
            'id': task_id,
            'name': line_split[1].strip(),
            'description': line_split[2].strip(),
            'difficulty': line_split[3].strip(),
            'category': line_split[4].strip(),
            'subcategory': line_split[5].strip(),
            'area': line_split[7].strip()
        }

        updated_area = task_data.get(area, [])
        updated_area.append(current_task)
        task_data.update({area: updated_area})
        all_tasks_list.append(current_task)
        tasks_by_id[task_id] = current_task

    return task_data, all_tasks_list, tasks_by_id


with open('src/resources/taskData.json', 'r') as task_data_file:
    task_data = json.load(task_data_file)

tasks_by_region, all_tasks_list, tasks_by_id = parse_csv(task_data)

task_data['tasks'] = all_tasks_list
task_data['tasksByRegion'] = tasks_by_region
task_data['tasksById'] = tasks_by_id

with open('src/resources/taskData.json', 'w') as task_data_file:
    task_data_file.write(json.dumps(task_data, indent=4))
