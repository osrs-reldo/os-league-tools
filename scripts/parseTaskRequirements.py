import csv 
import json 

# Modified code from:
# https://www.geeksforgeeks.org/convert-csv-to-json-using-python/


tasksCsvPath = r'scripts/inputs/tasks.csv'
requirementsCsvPath = r'scripts/inputs/taskRequirements.csv'
jsonOutputPath = r'scripts/outputs/taskRequirementData.json'

# Read tasks into a name -> id lookup
tasks = {}
with open(tasksCsvPath) as csvf: 
	csvReader = csv.DictReader(csvf) 

	for row in csvReader: 
		key = row.pop('Name').strip() # This is the primary key
		tasks[key] = row['Id']

requirements = {} 
with open(requirementsCsvPath, encoding='utf-8') as csvf: 
	csvReader = csv.DictReader(csvf) 

	for row in csvReader: 
		rowOutput = {'skills':[]}
		key = row.pop('Task') # This is the lookup key
		if not key in tasks:
			raise Exception('"' + key + '" not found in task lookup. Check spelling or new task names.')
		taskId = tasks[key] # This is the primary key

		for prop in row:
			# Skip empty columns
			if row[prop] == '':
				continue
			if prop == 'Notes': 
				rowOutput['notes'] = row[prop]
				continue
			if prop.startswith('Skill'):
				skill = {}
				skill['name'] = row[prop]
				skill['level'] = row['Level' + prop[5]]
				rowOutput['skills'].append(skill)

		if len(rowOutput['skills']) > 0 or 'notes' in rowOutput:
			requirements[taskId] = rowOutput 

with open(jsonOutputPath, 'w', encoding='utf-8') as jsonf: 
	jsonf.write(json.dumps(requirements, indent=4)) 
