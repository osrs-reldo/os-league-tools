import re
import json

# quick'n'dirty script for porting in calc data from working spreadsheets I've been using for data entry (see exported .csvs in /inputs)


def parseInputOutputLine(line):
    if line == '':
        return []

    split = line.split(';')
    results = []
    for data in split:
        dataSplit = data.split(' - ')
        pattern = r'(\d+\.?\d*) (.+)'
        groups = re.search(pattern, dataSplit[0].strip())
        if groups is None:
            result = {
                'name': dataSplit[0].strip()
            }
        else:
            result = {
                'name': groups.group(2),
                'amount': float(groups.group(1)),
                'chance': 1
            }
            if len(dataSplit) > 1:
                result['chance'] = float(dataSplit[1]) / 100
        results.append(result)
    return results


def parseMultiplier(lineSplit, multipliers):
    if lineSplit[0] == '':
        return False
    else:
        multiplierJson = {
            'id': lineSplit[0],
            'name': lineSplit[1],
            'multiplier': lineSplit[2]
        }
        multipliers.append(multiplierJson)
        return True


def parseCsv(skillName):
    NEXT_LINE_IS_SKILL_DATA = False
    NEXT_LINE_IS_CATEGORIES = False
    NEXT_LINE_IS_EXP_MULT = False
    NEXT_LINE_IS_INPUT_MULT = False
    NEXT_LINE_IS_OUTPUT_MULT = False
    NEXT_LINE_IS_ACTIONS = False
    skill_data = {}
    categories = []
    exp_mult = []
    input_mult = []
    output_mult = []
    actions = []

    csvFile = open('scripts/inputs/' + skillName + '.csv', "r")
    for line in csvFile:
        line = line.strip()
        lineSplit = line.split(',')
        if lineSplit[0] == 'SKILL':
            NEXT_LINE_IS_SKILL_DATA = True
        elif lineSplit[0] == 'CATEGORIES':
            NEXT_LINE_IS_CATEGORIES = True
        elif lineSplit[0] == 'EXP MULTIPLIERS':
            NEXT_LINE_IS_EXP_MULT = True
        elif lineSplit[0] == 'INPUT MULTIPLIERS':
            NEXT_LINE_IS_INPUT_MULT = True
        elif lineSplit[0] == 'OUTPUT MULTIPLIERS':
            NEXT_LINE_IS_OUTPUT_MULT = True
        elif lineSplit[0] == 'ACTIONS':
            NEXT_LINE_IS_ACTIONS = True
        elif NEXT_LINE_IS_SKILL_DATA:
            NEXT_LINE_IS_SKILL_DATA = False
            skill_data['name'] = lineSplit[0]
            skill_data['icon'] = lineSplit[1]
            skill_data['type'] = lineSplit[2]
            skill_data['isCombatSkill'] = lineSplit[3] == 'TRUE'
        elif NEXT_LINE_IS_CATEGORIES:
            NEXT_LINE_IS_CATEGORIES = False
            for category in lineSplit:
                if category != '':
                    categoryJson = {
                        'value': category,
                        'label': category,
                    }
                    categories.append(categoryJson)
        elif NEXT_LINE_IS_EXP_MULT:
            NEXT_LINE_IS_EXP_MULT = parseMultiplier(lineSplit, exp_mult)
        elif NEXT_LINE_IS_INPUT_MULT:
            NEXT_LINE_IS_INPUT_MULT = parseMultiplier(lineSplit, input_mult)
        elif (NEXT_LINE_IS_OUTPUT_MULT):
            NEXT_LINE_IS_OUTPUT_MULT = parseMultiplier(lineSplit, output_mult)
        elif (NEXT_LINE_IS_ACTIONS):
            if lineSplit[0] == '':
                NEXT_LINE_IS_ACTIONS = False
            else:
                actionJson = {
                    'id': int(lineSplit[0]),
                    'name': lineSplit[1],
                    'category': lineSplit[2],
                    'exp': float(lineSplit[3]),
                    'level': int(lineSplit[4]),
                    'icon': lineSplit[5],
                    'inputs': parseInputOutputLine(lineSplit[6]),
                    'outputs': parseInputOutputLine(lineSplit[7]),
                    'areas': re.split('; ?', lineSplit[8]),
                    'expMultipliers': [] if lineSplit[9] == '' else re.split('; ?', lineSplit[9]),
                    'inputMultipliers': [] if lineSplit[10] == '' else re.split('; ?', lineSplit[10]),
                    'outputMultipliers': [] if lineSplit[11] == '' else re.split('; ?', lineSplit[11]),
                }
                actions.append(actionJson)
    csvFile.close()

    skill_data['categories'] = categories
    skill_data['expMultipliers'] = exp_mult
    skill_data['inputMultipliers'] = input_mult
    skill_data['outputMultipliers'] = output_mult
    skill_data['actions'] = actions
    return skill_data


SKILLS = ['agility', 'construction', 'cooking', 'crafting', 'farming',
          'firemaking', 'fishing', 'fletching', 'herblore', 'hunter',
          'magic', 'mining', 'prayer', 'runecrafting', 'smithing',
          'thieving', 'woodcutting']


with open('src/resources/calculatorData.json', 'r') as calc_data_file:
    calc_data = json.load(calc_data_file)

updated_skill_data = {}
for skill in SKILLS:
    updated_skill_data[skill] = parseCsv(skill)
calc_data['calculators'] = updated_skill_data

with open('src/resources/calculatorData.json', 'w') as calc_data_file:
    calc_data_file.write(json.dumps(calc_data, indent=4))
