export interface ToolData {
    key: string;
    name: string;
    link: string;
}

export interface KnowledgeItem {
    key: string;
    iconKey: string;
    name: string;
    link: string;
}

export interface WorkInterval {
    start: string;
    end: string;
}

export const phpWorkIntervals: WorkInterval[] = [
    { start: '2021-03-09', end: '2023-04-24' },
    { start: '2023-08-01', end: '2025-06-09' },
];

export const birthDate = new Date('2001-08-17');
export const completedCollegeDate = new Date('2021-07-02');
//export const completedSchoolDate = new Date('2017-06-28');

export const knowledge: KnowledgeItem[] = [
    {
        key: 'ddd',
        iconKey: 'book',
        name: 'Domain-Driven Design',
        link: 'https://www.domainlanguage.com/ddd/',
    },
    {
        key: 'tdd',
        iconKey: 'book2',
        name: 'Test-Driven Development',
        link: 'https://martinfowler.com/bliki/TestDrivenDevelopment.html',
    },
    {
        key: 'microservices',
        iconKey: 'book3',
        name: 'Microservices Architecture',
        link: 'https://martinfowler.com/microservices/',
    },
    {
        key: 'clean-architecture',
        iconKey: 'book4',
        name: 'Clean Architecture',
        link: 'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html',
    },
    {
        key: 'monolith',
        iconKey: 'book5',
        name: 'Monolithic Architecture',
        link: 'https://www.ibm.com/think/topics/monolithic-architecture',
    },
    {
        key: 'elm-architecture',
        iconKey: 'elm',
        name: 'Elm architecture',
        link: 'https://guide.elm-lang.org/architecture/',
    },
];

export const tools: ToolData[] = [
    {
        key: 'rust',
        name: 'Rust',
        link: 'https://www.rust-lang.org/',
    },
    {
        key: 'iced',
        name: 'Iced',
        link: 'https://iced.rs/',
    },
    {
        key: 'python',
        name: 'Python',
        link: 'https://www.python.org/',
    },
    {
        key: 'javascript',
        name: 'JavaScript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        key: 'php',
        name: 'PHP',
        link: 'https://www.php.net/',
    },
    {
        key: 'phpunit',
        name: 'PHPUnit',
        link: 'https://phpunit.de/index.html',
    },
    {
        key: 'symfony',
        name: 'Symfony',
        link: 'https://symfony.com/',
    },
    {
        key: 'laravel',
        name: 'Laravel',
        link: 'https://laravel.com/',
    },
    {
        key: 'blade',
        name: 'Blade',
        link: 'https://laravel.com/docs/master/blade',
    },
    {
        key: 'yii',
        name: 'Yii',
        link: 'https://www.yiiframework.com/',
    },
    {
        key: 'docker',
        name: 'Docker',
        link: 'https://www.docker.com/',
    },
    {
        key: 'html',
        name: 'HTML5',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
        key: 'twig',
        name: 'Twig',
        link: 'https://twig.symfony.com/',
    },
    {
        key: 'gentoo',
        name: 'Gentoo Linux',
        link: 'https://www.gentoo.org/',
    },
    {
        key: 'debian',
        name: 'Debian Linux',
        link: 'https://www.debian.org/',
    },
    {
        key: 'nushell',
        name: 'Nushell',
        link: 'https://www.nushell.sh/',
    },
    {
        key: 'bash',
        name: 'Bash',
        link: 'https://www.gnu.org/software/bash/',
    },
    {
        key: 'neovim',
        name: 'Neovim',
        link: 'https://neovim.io/',
    },
    {
        key: 'phpstorm',
        name: 'PhpStorm',
        link: 'https://www.jetbrains.com/phpstorm/',
    },
    {
        key: 'datagrip',
        name: 'DataGrip',
        link: 'https://www.jetbrains.com/datagrip/',
    },
    {
        key: 'emacs',
        name: 'Emacs',
        link: 'https://www.gnu.org/software/emacs/',
    },
    {
        key: 'grafana',
        name: 'Grafana',
        link: 'https://grafana.com/',
    },
    {
        key: 'loki',
        name: 'Loki',
        link: 'https://grafana.com/docs/loki/latest/',
    },
    {
        key: 'mysql',
        name: 'MySQL',
        link: 'https://www.mysql.com/',
    },
    {
        key: 'redis',
        name: 'Redis',
        link: 'https://redis.io/',
    },
    {
        key: 'postgres',
        name: 'PostgreSQL',
        link: 'https://www.postgresql.org/',
    },
    {
        key: 'svelte',
        name: 'Svelte',
        link: 'https://svelte.dev/',
    },
    {
        key: 'p5js',
        name: 'p5.js',
        link: 'https://p5js.org/',
    },
    {
        key: 'sentry',
        name: 'Sentry',
        link: 'https://sentry.io/welcome/',
    },
    {
        key: 'caddy',
        name: 'Caddy',
        link: 'https://caddyserver.com/',
    },
    {
        key: 'nginx',
        name: 'Nginx',
        link: 'https://www.nginx.com/',
    },
    {
        key: 'jenkins',
        name: 'Jenkins',
        link: 'https://www.jenkins.io/',
    },
    {
        key: 'gitlab',
        name: 'GitLab',
        link: 'https://about.gitlab.com/',
    },
    {
        key: 'git',
        name: 'Git',
        link: 'https://git-scm.com/',
    },
    {
        key: 'axum',
        name: 'Axum',
        link: 'https://github.com/tokio-rs/axum',
    },
    {
        key: 'rabbitmq',
        name: 'RabbitMQ',
        link: 'https://www.rabbitmq.com/',
    },
    {
        key: 'kafka',
        name: 'Apache Kafka',
        link: 'https://kafka.apache.org/',
    },
    {
        key: 'jira',
        name: 'Jira',
        link: 'https://www.atlassian.com/software/jira',
    },
    {
        key: 'codeception',
        name: 'Codeception',
        link: 'https://codeception.com/',
    },
    {
        key: 'openapi',
        name: 'OpenAPI',
        link: 'https://www.openapis.org/',
    },
    {
        key: 'nodejs',
        name: 'Node.js',
        link: 'https://nodejs.org/',
    },
    {
        key: 'github',
        name: 'GitHub',
        link: 'https://github.com/',
    },
    {
        key: 'linkedin',
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/',
    },
    {
        key: 'chatgpt',
        name: 'ChatGPT',
        link: 'https://chat.openai.com/',
    },
    {
        key: 'opnsense',
        name: 'OPNsense',
        link: 'https://opnsense.org/',
    },
    {
        key: 'tailscale',
        name: 'Tailscale',
        link: 'https://tailscale.com/',
    },
    {
        key: 'headscale',
        name: 'Headscale',
        link: 'https://github.com/juanfont/headscale',
    },
    {
        key: 'prometheus',
        name: 'Prometheus',
        link: 'https://prometheus.io/',
    },
    {
        key: 'frigate',
        name: 'Frigate NVR',
        link: 'https://frigatevideo.org/',
    },
    {
        key: 'immich',
        name: 'Immich',
        link: 'https://immich.app/',
    },
    {
        key: 'syncthing',
        name: 'Syncthing',
        link: 'https://syncthing.net/',
    },
    {
        key: 'filebrowser',
        name: 'FileBrowser',
        link: 'https://filebrowser.org/',
    },
    {
        key: 'colemak',
        name: 'Colemak',
        link: 'https://colemak.org/',
    },
    {
        key: 'roam',
        name: 'Roam',
        link: 'https://roamresearch.com/',
    },
    {
        key: 'linux',
        name: 'Linux',
        link: 'https://www.linux.com/what-is-linux/',
    },
    {
        key: 'atuin',
        name: 'Atuin',
        link: 'https://atuin.sh/',
    },
    {
        key: 'websocket',
        name: 'WebSocket',
        link: 'https://en.wikipedia.org/wiki/WebSocket',
    },
    {
        key: 'http',
        name: 'HTTP',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview',
    },
    {
        key: 'graphql',
        name: 'GraphQL',
        link: 'https://graphql.org/',
    },
    {
        key: 'vim',
        name: 'Vim',
        link: 'https://www.vim.org/',
    },
    {
        key: 'typescript',
        name: 'TypeScript',
        link: 'https://www.typescriptlang.org/',
    },
    {
        key: 'elasticsearch',
        name: 'Elasticsearch',
        link: 'https://www.elastic.co/elasticsearch',
    },
];

export const fallbackIcon = {
    key: 'fallback',
    name: '404',
    link: '',
};

export function getToolData(key: string): ToolData {
    return tools.find((icon) => icon.key === key) ?? fallbackIcon;
}
