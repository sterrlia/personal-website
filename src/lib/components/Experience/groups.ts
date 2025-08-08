import {
    Level,
    type ChoosenLevelType,
    type Group,
    type GroupItem,
    type GroupItemDefinition,
    type GroupScheme,
} from './types';
import * as assets from '$lib/assets';

export const scheme: GroupScheme = {
    language: [
        { key: 'php', level: Level.Work },
        { key: 'rust', level: Level.Personal },
        { key: 'python', level: Level.Personal },
        { key: 'javascript', level: Level.Work },
        { key: 'bash', level: Level.Work },
    ],
    framework: [
        { key: 'symfony', level: Level.Work },
        { key: 'laravel', level: Level.Work },
        { key: 'yii', level: Level.Work },
        { key: 'iced', level: Level.Personal },
        { key: 'axum', level: Level.Personal },
        { key: 'codeception', level: Level.Work },
        { key: 'phpunit', level: Level.Work },
    ],
    database: [
        { key: 'mysql', level: Level.Work },
        { key: 'postgres', level: Level.Work },
        { key: 'redis', level: Level.Work },
        { key: 'elasticsearch', level: Level.Work },
    ],
    queue: [
        { key: 'rabbitmq', level: Level.Work },
        { key: 'kafka', level: Level.Work },
    ],
    devops: [
        { key: 'docker', level: Level.Work },
        { key: 'nginx', level: Level.Work },
        { key: 'caddy', level: Level.Personal },
        { key: 'git', level: Level.Work },
        { key: 'grafana', level: Level.Personal },
        { key: 'prometheus', level: Level.Personal },
        { key: 'loki', level: Level.Personal },
    ],
    templating: [
        { key: 'twig', level: Level.Work },
        { key: 'blade', level: Level.Work },
    ],
    services: [
        { key: 'gitlab', level: Level.Work },
        { key: 'jira', level: Level.Work },
        { key: 'jenkins', level: Level.Work },
        { key: 'sentry', level: Level.Work },
        { key: 'github', level: Level.Personal },
    ],
    knowledge: [
        { key: 'ddd', level: Level.Work },
        { key: 'tdd', level: Level.Work },
        { key: 'microservices', level: Level.Work },
        { key: 'clean-architecture', level: Level.Work },
        { key: 'monolith', level: Level.Work },
        { key: 'elm-architecture', level: Level.Personal },
    ],
    api: [
        { key: 'http', level: Level.Work },
        { key: 'websocket', level: Level.Personal },
        { key: 'graphql', level: Level.Work },
        { key: 'openapi', level: Level.Work },
    ],
};

function buildGroupItems(group: GroupItemDefinition[]): GroupItem[] {
    return group
        .map((item) => {
            const logoData = assets.tools.find((icon) => icon.key === item.key);
            if (logoData) {
                const result: GroupItem = {
                    link: logoData.link,
                    iconKey: logoData.key,
                    name: logoData.name,
                    level: item.level,
                    key: item.key,
                };

                return result;
            }

            const knowledgeData = assets.knowledge.find(
                (knowledgeItem) => item.key === knowledgeItem.key
            );
            if (knowledgeData) {
                const result: GroupItem = {
                    link: knowledgeData.link,
                    iconKey: knowledgeData.iconKey,
                    name: knowledgeData.name,
                    level: item.level,
                    key: item.key,
                };

                return result;
            }

            return null;
        })
        .filter((entry): entry is GroupItem => entry !== null);
}

export function get(level: ChoosenLevelType): Group[] {
    const filteredScheme =
        level === 'all'
            ? scheme
            : Object.fromEntries(
                Object.entries(scheme).map(
                    ([key, definitions]: [string, GroupItemDefinition[]]) => [
                        key,
                        definitions.filter(
                            (definition) => definition.level === level
                        ),
                    ]
                )
            );

    const groups: Group[] = [
        {
            name: 'Languages',
            items: buildGroupItems(filteredScheme.language),
        },
        {
            name: 'Frameworks',
            items: buildGroupItems(filteredScheme.framework),
        },
        {
            name: 'Databases & Caching',
            items: buildGroupItems(filteredScheme.database),
        },
        {
            name: 'Messaging & Queues',
            items: buildGroupItems(filteredScheme.queue),
        },
        {
            name: 'DevOps',
            items: buildGroupItems(filteredScheme.devops),
        },
        {
            name: 'Templating',
            items: buildGroupItems(filteredScheme.templating),
        },
        {
            name: 'Platforms & Services',
            items: buildGroupItems(filteredScheme.services),
        },
        {
            name: 'Knowledge',
            items: buildGroupItems(filteredScheme.knowledge),
        },
        {
            name: 'API',
            items: buildGroupItems(filteredScheme.api),
        },
    ];

    return groups.filter((group) => group.items.length !== 0);
}
