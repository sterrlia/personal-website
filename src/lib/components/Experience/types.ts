export const Level = {
  Work: "work",
  Personal: "personal",
} as const;

export const LevelGroup = {
  All: "all",
} as const;

export type LevelType = (typeof Level)[keyof typeof Level];
export type LevelGroupType = (typeof LevelGroup)[keyof typeof LevelGroup];

export type ChoosenLevelType = LevelType | LevelGroupType;

export interface GroupItemDefinition {
  key: string;
  level: LevelType;
}

export interface GroupItem {
  key: string;
  level: LevelType;
  iconKey: string;
  link: string;
  name: string;
}

export type Group = {
  name: string;
  items: GroupItem[];
};

export interface GroupScheme {
  language: GroupItemDefinition[];
  framework: GroupItemDefinition[];
  database: GroupItemDefinition[];
  queue: GroupItemDefinition[];
  devops: GroupItemDefinition[];
  templating: GroupItemDefinition[];
  services: GroupItemDefinition[];
  knowledge: GroupItemDefinition[];
}
