module.exports = {
  title: 'Crystal Docs',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    // sidebarCollapsible: false,
    navbar: {
      title: 'Crystal Docs',
      logo: {
        alt: 'Crystal Lang Logo',
        src: 'img/crystal.svg',
      },
      links: [
        {
          href: 'https://crystal-lang.org',
          label: 'Home',
          position: 'right',
          target: '_self',
        },
        {
          href: 'https://forum.crystal-lang.org',
          label: 'Forum',
          position: 'right',
          target: '_self',
        },
        {
          href: 'https://crystal-lang.org/blog',
          label: 'Blog',
          position: 'right',
          target: '_self',
        },
        {
          href: 'https://crystal-lang.org/sponsors',
          label: 'Sponsors',
          position: 'right',
          target: '_self',
        },
        {
          href: 'https://crystal-lang.org/community',
          label: 'Community',
          position: 'right',
          target: '_self',
        },
        {
          to: 'docs/introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Crystal is licensed under the Apache License, <a href='https://www.apache.org/licenses/LICENSE-2.0'>Version 2.0</a>`,
      logo: {
        alt: 'Manas Technology Solutions Logo',
        src: 'img/manas.svg',
      },
      links: [
        {
          item: {
            label: `Crystal language, born & raised at Manas <img src='img/manas.svg' alt='Manas Technology Solutions Logo' />`,
            to: 'docs/doc1',
          },
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: './docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/danimiba/crystal-book-v2',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
};
