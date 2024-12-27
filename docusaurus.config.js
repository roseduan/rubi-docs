// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RUBIK Pi Documentation',
  tagline: 'the first Pi built on Qualcomm AI platforms for developers.',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://www.thundercomm.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/rubik-pi-3/en/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Thundercomm', // Usually your GitHub org/user name.
  projectName: 'RUBIK Pi Documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  scripts: [
    {
      src: 'https://hm.baidu.com/hm.js?cd51725dd2087a36c61e7b2d17d7817b',
      async: true,
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js', 
              
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/rubikpi-ai/documentation/',
          // bugUrl: 'https://github.com/rubikpi-ai/documentation/issues',
        },
        
       theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

 
    
 
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        // title: 'Documentation',
        logo: {
          alt: 'RUBIK Pi',
          src: 'img/rubik-pi-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'RUBIK Pi 3 Documentation',            
          },
          {href: 'https://www.thundercomm.com/product/rubik-pi/', label: 'Product Detail', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },     


      footer: {
        style: 'dark',
        links: [
          
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'X',
          //       href: 'https://x.com/docusaurus',
          //     },
          //   ],
          // },
        
        ],
        copyright: `Copyright 2016 - ${new Date().getFullYear()}. Thundercomm America Corporation. All rights reserved. 渝ICP备16006224号-1 渝公网安备50011202504292`,
      },
      prism: {
        theme: prismThemes.github,
        // theme: prismThemes.dracula, //黑色主题
        darkTheme: prismThemes.dracula,
        

      },
    }),




    plugins: [    
        // ... Your other themes.
        [
          require.resolve("@easyops-cn/docusaurus-search-local"),
    
          ({
          
            language: ["en", "zh"],
  
          }),
        ],

    ],  
      
     
};


  


export default config;


// In your `docusaurus.config.js`:

  
 
