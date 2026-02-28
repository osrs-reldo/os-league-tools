import { describe, expect, it } from 'vitest';

import { normalizeTaskDefinitions } from './normalize';

describe('normalizeTaskDefinitions', () => {
  it('merges raw and enrichment skills, keeping highest level per skill', () => {
    const normalized = normalizeTaskDefinitions(
      'COMBAT',
      [
        {
          structId: 1001,
          sortId: 10,
          skills: [
            { skill: 'SLAYER', level: 70 },
            { skill: 'RANGED', level: 50 },
          ],
          completionPercent: 35,
        },
      ],
      {
        skillsByTaskId: {
          '1001': [
            { skill: 'SLAYER', level: 85 },
            { skill: 'AGILITY', level: 60 },
          ],
        },
        questsByTaskId: {
          '1001': [55, 137],
        },
      }
    );

    expect(normalized).toHaveLength(1);
    expect(normalized[0]).toMatchObject({
      taskType: 'COMBAT',
      structId: 1001,
      questRequirements: [55, 137],
    });
    expect(normalized[0]?.skillRequirements).toEqual(
      expect.arrayContaining([
        { skill: 'SLAYER', level: 85 },
        { skill: 'RANGED', level: 50 },
        { skill: 'AGILITY', level: 60 },
      ])
    );
    expect(normalized[0]?.skillRequirements).toHaveLength(3);
  });

  it('uses raw task fields when no enrichment exists', () => {
    const normalized = normalizeTaskDefinitions(
      'LEAGUE_5',
      [
        {
          structId: 999,
          sortId: 1,
          wikiNotes: 'hello',
        },
      ],
      {
        skillsByTaskId: {},
        questsByTaskId: {},
      }
    );

    expect(normalized).toEqual([
      {
        taskType: 'LEAGUE_5',
        structId: 999,
        sortId: 1,
        completionPercent: null,
        skillRequirements: [],
        questRequirements: [],
        wikiNotes: 'hello',
        raw: {
          structId: 999,
          sortId: 1,
          wikiNotes: 'hello',
        },
      },
    ]);
  });
});
