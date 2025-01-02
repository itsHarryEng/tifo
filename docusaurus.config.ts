import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Tifo',
  tagline: 'Italian, literally "typhus (fever)", by extension "passionate support for a sports team".',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'itsHarryEng', // Usually your GitHub org/user name.
  projectName: 'tifo', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/itsHarryEng/tifo/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Tifo & Colors Committee',
      logo: {
        alt: 'Tifo Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'tifos/overview',
          position: 'left',
          label: 'Tifos',
        },
        {
          type: 'doc',
          docId: 'banners/overview',
          position: 'left',
          label: 'Banners',
        },
        {
          type: 'doc',
          docId: 'artists/overview',
          position: 'left',
          label: 'Artists',
        },
        {
          type: 'doc',
          docId: 'leads/charter',
          position: 'left',
          label: 'Leads',
        },
        {
          href: 'https://github.com/itsHarryEng/tifo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tifos',
              to: '/docs/tifos/overview',
            },
            {
              label: 'Banners',
              to: '/docs/banners/overview',
            },
            {
              label: 'Artists',
              to: '/docs/artists/overview',
            },
            {
              label: 'Leads',
              to: '/docs/leads/charter',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Los Verdes',
              href: 'https://www.losverdesatx.org/',
            },
            {
              label: 'Slack',
              href: 'https://losverdesatx.slack.com/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/LosVerdesATX/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/losverdesatx/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Los Verdes. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
