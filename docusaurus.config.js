// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OCEN',
  tagline: 'Open Credit Enablement Network',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ispirt.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ispirt', // Usually your GitHub org/user name.
  projectName: 'ocen', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  presets: [
    [
      'docusaurus-preset-openapi',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        api: {
          path: require.resolve("./static/dist.json"),
          routeBasePath: "/api",
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/iSPIRT/OCEN-Documentation/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          editUrl:
            'https://github.com/iSPIRT/OCEN-Documentation/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ]
  ],

  plugins: [
    [
      "docusaurus-plugin-openapi",
      {
        id: "multi-spec",
        path: "apis",
        routeBasePath: "apis",
      },
    ],
    'my-loaders',
    'tailwind-loader',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
				defaultMode: 'light',
				disableSwitch: true,
			},
      image: 'img/ocen-splash-screen.png',
      navbar: {
        title: 'OCEN',
        logo: {
          alt: 'OCEN Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/apis', label: 'API', position: 'left' },
          {
            to: '/contact',
            position: 'right',
            label: 'Contact',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'India Stack',
                href: 'https://www.indiastack.org/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/India_Stack',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/iSPIRT/OCEN-Documentation',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} iSpirt`,
      },
    }),
};

module.exports = config;
