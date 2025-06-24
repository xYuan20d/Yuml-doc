// @ts-check
// Docusaurus v2 配置文件

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  deploymentBranch: "main",

  title: 'Yuml',
  tagline: '一门基于 YAML 的声明式 UI 与数据交互语言',
  favicon: 'img/logo1.png',

  // 访问网址
  url: 'https://xYuan20d.github.io',
  baseUrl: '/',

  // 目标仓库
  organizationName: 'xYuan20d',
  projectName: 'xYuan20d.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),

          // “编辑此页”按钮
          editUrl: 'https://github.com/xYuan20d/Yuml-doc/edit/main/',

          routeBasePath: 'docs',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/xYuan20d/Yuml-doc/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/yuml-cover.jpg',
    navbar: {
      title: 'Yuml',
      logo: {
        alt: 'Yuml Logo',
        src: '/img/logo1.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        {
          to: '/blog',         // 博客入口路径
          label: '动态',
          position: 'left',     // 显示在左边（靠近“文档”）
        },
        {
          href: 'https://github.com/xYuan20d/Yuml', // 指向源码仓库
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '快速开始',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/xYuan20d/Yuml-doc', // 源码仓库
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} YuanYuan. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
  scripts: [
    {
      src: '/js/particles.js',
      async: true,
      defer: true,
    },
  ],
};

config.plugins = [
  [
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['zh', 'en'], // 支持中文 + 英文搜索
        highlightResult: true,   // 搜索结果关键词高亮
        maxHits: 10,             // 每次最多显示多少个搜索结果
        indexBaseUrl: true,      // 是否索引主页路径 "/"
        fields: {
          title: { boost: 200 },
          content: { boost: 2 },
          keywords: { boost: 100 },
        },
      }
  ]
];

export default config;