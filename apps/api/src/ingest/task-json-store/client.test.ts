import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { fetchTaskEnrichmentForType } from './client';

describe('fetchTaskEnrichmentForType', () => {
  const fetchMock = vi.fn<typeof fetch>();

  beforeEach(() => {
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  it('returns both skills and quests when both files are available', async () => {
    fetchMock.mockImplementation(async (input) => {
      const url = String(input);
      if (url.includes('/skills.json')) {
        return new Response(JSON.stringify({ values: { '100': [{ skill: 'SLAYER', level: 60 }] } }), { status: 200 });
      }
      if (url.includes('/quests.json')) {
        return new Response(JSON.stringify({ values: { '100': [55] } }), { status: 200 });
      }
      return new Response('not found', { status: 404 });
    });

    const result = await fetchTaskEnrichmentForType('COMBAT');

    expect(result).toEqual({
      skillsByTaskId: { '100': [{ skill: 'SLAYER', level: 60 }] },
      questsByTaskId: { '100': [55] },
    });
  });

  it('gracefully falls back when one enrichment file is missing', async () => {
    fetchMock.mockImplementation(async (input) => {
      const url = String(input);
      if (url.includes('/skills.json')) {
        return new Response(JSON.stringify({ values: { '200': [{ skill: 'AGILITY', level: 70 }] } }), { status: 200 });
      }
      return new Response('not found', { status: 404 });
    });

    const result = await fetchTaskEnrichmentForType('LEAGUE_5');

    expect(result).toEqual({
      skillsByTaskId: { '200': [{ skill: 'AGILITY', level: 70 }] },
      questsByTaskId: {},
    });
  });
});
