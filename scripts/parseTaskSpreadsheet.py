import re
import json

# quick'n'dirty script for porting in task data from working spreadsheet I've been using for data entry (see exported .csvs in /inputs)


def parse_csv(skillName):
    IS_HEADER_LINE = True
    task_data = {}

    csv_file = open('scripts/inputs/tasks.csv', "r")
    for line in csv_file:
        if IS_HEADER_LINE:
            IS_HEADER_LINE = False
            continue

        line = line.strip()
        line_split = line.split(',')

        area = line_split[5].strip()
        current_task = {
            'id': line_split[0].strip(),
            'name': line_split[1].strip(),
            'description': line_split[2].strip(),
            'difficulty': line_split[3].strip(),
            'category': line_split[4].strip()
        }
        updated_area = task_data.get(area, [])
        updated_area.append(current_task)
        task_data.update({area: updated_area})

    return task_data


with open('src/resources/taskData.json', 'r') as task_data_file:
    task_data = json.load(task_data_file)

task_data['tasks'] = parse_csv(task_data)

with open('src/resources/taskData.json', 'w') as task_data_file:
    task_data_file.write(json.dumps(task_data, indent=4))
