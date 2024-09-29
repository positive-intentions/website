// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome to positive-intentions',
  tagline: 'positive-intentions is a decentralised, browser-agnostic, and no-registration-required P2P chat application providing secure messaging, video calls, and data ownership with push notifications and effortless data export/import, all encapsulated within a JavaScript-based Progressive Web App.',
  favicon: 'img/favicon.ico',
  headTags: [
    {
      tagName: 'script',
      attributes: {
        async: 'true',
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3858565369567456',
        crossorigin: 'anonymous',
      },
    },
  ],
  // Set the production url of your site here
  url: 'https://positive-intentions.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'positive-intentions', // Usually your GitHub org/user name.
  projectName: 'positive-intentions site', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en", // "es", "zh"
      // "bn", "de", "fr", "gu", "hi", "id", "it", "ja", "ko", "nl", "pt", "ru", "sw", "tr", "uk", "yue"
    ],
    "localeConfigs": {
      // "bn": {
      //   "label": "বাঙালি"
      // },
      // "de": {
      //   "label": "Deutsch"
      // },
      "en": {
        "label": "English"
      },
      // "es": {
      //   "label": "Español"
      // },
      // "fr": {
      //   "label": "Français"
      // },
      // "gu": {
      //   "label": "ગુજરાતી"
      // },
      // "hi": {
      //   "label": "हिन्दी"
      // },
      // "id": {
      //   "label": "Bahasa Indonesia"
      // },
      // "it": {
      //   "label": "Italiano"
      // },
      // "ja": {
      //   "label": "日本語"
      // },
      // "ko": {
      //   "label": "한국어"
      // },
      // "nl": {
      //   "label": "Nederlands"
      // },
      // "pt": {
      //   "label": "Português"
      // },
      // "ru": {
      //   "label": "Русский"
      // },
      // "sw": {
      //   "label": "Kiswahili"
      // },
      // "tr": {
      //   "label": "Türkçe"
      // },
      // "uk": {
      //   "label": "Українська"
      // },
      // "yue": {
      //   "label": "粤语"
      // },
      // "zh": {
      //   "label": "中文"
      // }
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/positive-intentions/website/tree/main/',
        },
        // blog: false,
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          // blogPostComponent: require.resolve('./src/components/AnalyticsWrapper.js'),

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/positive-intentions/website/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-WC4XPJK069',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.png',
      navbar: {
        title: 'positive-intentions',
        logo: {
          alt: 'positive-intentions',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { href: 'https://chat.positive-intentions.com/', label: 'App', position: 'left' },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
          {
            href: 'https://github.com/positive-intentions',
            label: 'GitHub',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
            position: 'right',
          },
          // 

          // {
          //   href: 'https://github.com/sponsors/positive-intentions',
          //   label: 'Support',
          //   className: 'header-sponsor-link',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'App',
                href: 'https://chat.positive-intentions.com',
              },
              {
                label: 'Getting Started',
                to: '/docs/basics/getting-started',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Contact Us',
                to: 'https://www.reddit.com/r/positive_intentions',
              }
            ],
          },
          {
            title: 'Open Source',
            items: [
              {
                label: 'Chat',
                href: 'https://github.com/positive-intentions/chat',
              },
              {
                label: 'Cryptography',
                href: 'https://github.com/positive-intentions/cryptography',
              },
              {
                label: 'PWA boilerplate',
                href: 'https://github.com/positive-intentions/frontend-base',
              },
              {
                label: 'Dim',
                href: 'https://github.com/positive-intentions/dim',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/positive-intentions',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/positive_intentions',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@positive_intentions',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/unnQnR67nR',
              },
              {
                label: 'Mastodon',
                href: 'https://mastodon.social/@xoron',
              },
              {
                label: 'Lemmy',
                href: 'https://lemmy.ml/c/positive_intentions',
              }
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'GitHub Sponsors',
                href: 'https://github.com/sponsors/positive-intentions',
              },
              {
                label: 'Patreon',
                href: 'https://www.patreon.com/positive_intentions',
              },
              {
                label: 'Open Collective',
                href: 'https://opencollective.com/positive_intentions',
              },
              {
                label: 'Ko-fi',
                href: 'https://ko-fi.com/positive_intentions',
              },
              {
                label: 'Polar',
                href: 'https://polar.sh/positive-intentions',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} positive-intentions. Built with positivity.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        // defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
  plugins: [[require.resolve('docusaurus-lunr-search'), {
    languages: [
      'en',
      // 'es',
      // 'zh'
    ] // language codes
  }]],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  clientModules: [
    require.resolve('./static/js/hydroAds.js'),
    require.resolve('./static/js/journeyAds.js'),
  ],
};

module.exports = config;
