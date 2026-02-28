export type TaskStoreManifest = {
  taskTypeMetadata: string;
  filterMetadata?: string;
};

export type TaskTypeDefinition = {
  name: string;
  description?: string;
  taskJsonName: string;
  isEnabled?: boolean;
  filters?: unknown[];
  intParamMap?: Record<string, number>;
  stringParamMap?: Record<string, number>;
  taskPointTiers?: Array<{ points: number; label: string }>;
};

export type RawTaskDefinition = {
  structId: number;
  sortId: number;
  skills?: Array<{ skill: string; level: number }>;
  wikiNotes?: string;
  completionPercent?: number;
  metadata?: Record<string, string | number>;
};

export type NormalizedTaskDefinition = {
  taskType: string;
  structId: number;
  sortId: number;
  completionPercent: number | null;
  skillRequirements: Array<{ skill: string; level: number }>;
  wikiNotes: string | null;
  raw: RawTaskDefinition;
};
