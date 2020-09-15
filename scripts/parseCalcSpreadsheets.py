import re
import json

# this is for porting in calc data from a bunch of working spreadsheets I've been using for data entry (see exported .csvs in /inputs)
# it is HACKY AND UGLY AF because I only plan to run this rarely in a big batch so if it works it works


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


def parseCsv(skillName):
    NEXT_LINE_IS_SKILL_DATA = False
    NEXT_LINE_IS_CATEGORIES = False
    SECOND_NEXT_LINE_IS_EXP_MULT = False
    SECOND_NEXT_LINE_IS_OUTPUT_MULT = False
    SECOND_NEXT_LINE_IS_ACTIONS = False
    NEXT_LINE_IS_EXP_MULT = False
    NEXT_LINE_IS_OUTPUT_MULT = False
    NEXT_LINE_IS_ACTIONS = False
    skilldata = {}
    categories = []
    expmult = []
    outputmult = []
    actions = []

    csvFile = open('scripts/inputs/' + skillName + '.csv', "r")
    for line in csvFile:
        line = line.strip()
        lineSplit = line.split(',')
        if lineSplit[0] == 'name':
            NEXT_LINE_IS_SKILL_DATA = True
        elif lineSplit[0] == 'CATEGORIES':
            NEXT_LINE_IS_CATEGORIES = True
        elif lineSplit[0] == 'EXP MULTIPLIERS':
            SECOND_NEXT_LINE_IS_EXP_MULT = True
        elif lineSplit[0] == 'OUTPUT MULTIPLIERS':
            SECOND_NEXT_LINE_IS_OUTPUT_MULT = True
        elif lineSplit[0] == 'ACTIONS':
            SECOND_NEXT_LINE_IS_ACTIONS = True
        elif SECOND_NEXT_LINE_IS_EXP_MULT:
            SECOND_NEXT_LINE_IS_EXP_MULT = False
            NEXT_LINE_IS_EXP_MULT = True
        elif SECOND_NEXT_LINE_IS_OUTPUT_MULT:
            SECOND_NEXT_LINE_IS_OUTPUT_MULT = False
            NEXT_LINE_IS_OUTPUT_MULT = True
        elif SECOND_NEXT_LINE_IS_ACTIONS:
            SECOND_NEXT_LINE_IS_ACTIONS = False
            NEXT_LINE_IS_ACTIONS = True
        elif NEXT_LINE_IS_SKILL_DATA:
            NEXT_LINE_IS_SKILL_DATA = False
            skilldata['name'] = lineSplit[0]
            skilldata['icon'] = lineSplit[1]
            skilldata['type'] = lineSplit[2]
            skilldata['isCombatSkill'] = lineSplit[3] == 'TRUE'
        elif NEXT_LINE_IS_CATEGORIES:
            NEXT_LINE_IS_CATEGORIES = False
            for category in lineSplit:
                if category != '':
                    categoryJson = {
                        'value': category,
                        'label': category,
                    }
                    categories.append(categoryJson)
        elif (NEXT_LINE_IS_EXP_MULT):
            if lineSplit[0] == '':
                NEXT_LINE_IS_EXP_MULT = False
            else:
                multiplierJson = {
                    'id': lineSplit[0],
                    'name': lineSplit[1],
                    'multiplier': lineSplit[2]
                }
                expmult.append(multiplierJson)
        elif (NEXT_LINE_IS_OUTPUT_MULT):
            if lineSplit[0] == '':
                NEXT_LINE_IS_OUTPUT_MULT = False
            else:
                multiplierJson = {
                    'id': lineSplit[0],
                    'name': lineSplit[1],
                    'multiplier': lineSplit[2]
                }
                outputmult.append(multiplierJson)
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
                    'areas': re.split('; ?', lineSplit[8])
                }
                actions.append(actionJson)
    csvFile.close()

    skilldata['categories'] = categories
    skilldata['expMultipliers'] = expmult
    skilldata['outputMultipliers'] = outputmult
    skilldata['actions'] = actions
    return skilldata


SKILLS = ['agility', 'construction', 'cooking', 'crafting', 'farming',
          'firemaking', 'fishing', 'fletching', 'herblore', 'hunter',
          'magic', 'mining', 'prayer', 'runecrafting', 'smithing',
          'thieving', 'woodcutting']

allSkillData = {}
for skill in SKILLS:
    skillData = parseCsv(skill)
    allSkillData[skill] = skillData

with open('scripts/outputs/skilldata.json', 'w') as f:
    read_data = f.write(json.dumps(allSkillData, indent=4))
