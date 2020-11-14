import csv 
import json 

# Modified code from:
# https://www.geeksforgeeks.org/convert-csv-to-json-using-python/

def make_json(csvFilePath, jsonFilePath):
	data = {} 
	
	with open(csvFilePath, encoding='utf-8') as csvf: 
		csvReader = csv.DictReader(csvf) 

		for row in csvReader: 
			rowOutput = {'skills':[]}
			key = row.pop('Task') # This is the primary key

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
				data[key] = rowOutput 

	with open(jsonFilePath, 'w', encoding='utf-8') as jsonf: 
		jsonf.write(json.dumps(data, indent=4)) 

csvFilePath = r'scripts/inputs/taskRequirements.csv'
jsonFilePath = r'scripts/outputs/taskRequirementData.json'

make_json(csvFilePath, jsonFilePath)
