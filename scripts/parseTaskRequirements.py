import csv 
import json 

# Modified code from:
# https://www.geeksforgeeks.org/convert-csv-to-json-using-python/

def make_json(csvFilePath, jsonFilePath):
	data = {} 
	
	with open(csvFilePath, encoding='utf-8') as csvf: 
		csvReader = csv.DictReader(csvf) 

		for row in csvReader: 
			rowOutput = {}
			key = row.pop('Task') # This is the primary key
			for val in row:
				# Strip empty columns
				if row[val] != '':
					rowOutput[val] = row[val]
			data[key] = rowOutput 

	with open(jsonFilePath, 'w', encoding='utf-8') as jsonf: 
		jsonf.write(json.dumps(data, indent=4)) 

csvFilePath = r'scripts/inputs/taskRequirements.csv'
jsonFilePath = r'scripts/outputs/taskRequirementData.json'

make_json(csvFilePath, jsonFilePath)
