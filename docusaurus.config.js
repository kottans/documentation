module.exports = {
  title: 'Kottans',
  tagline: 'Knowledge must be shared',
  url: 'https://kottans.org',
  baseUrl: '/documentation/',
  favicon: 'img/favicon.ico',
  organizationName: 'kottans',
  projectName: 'documentation',
  themeConfig: {
    navbar: {
      title: 'Kottans',
      logo: {
        alt: 'kottansLogo',
        src: 'img/catBlack.svg',
        srcDark: 'img/catWhite.svg',
      },
      links: [
        {to: 'docs/doc/philosophy', label: 'Docs', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/kottans',
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
              label: 'Docs',
              to: 'docs/doc/philosophy',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/kottans_org',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/radio_kottans',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/kottans_org/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Kottans.org',
              href: 'https://kottans.org/',
            },
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/kottans',
            },

          ],
        },
      ],
      copyright: `${new Date().getFullYear()} Kottans. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
