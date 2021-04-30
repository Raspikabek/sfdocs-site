/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SF Docs generator',
  tagline: 'A non-official sfdx plugin to generate documentation of your projects based in the source code of your repository.',
  url: 'https://sfdocs-test.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'SFDocs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/raspikabek/sfdocs-sfdx-plugin',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository'
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
              label: 'How to install',
              to: '/docs/intro',
            },
            {
              label: 'Commands',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
            {
              label: 'Plugin\'s GitHub',
              href: 'https://github.com/raspikabek/sfdocs-sfdx-plugin',
            },
            {
              label: 'Site\'s GitHub',
              href: 'https://github.com/raspikabek/sfdocs-site',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              html: `
              <a href="https://www.buymeacoffee.com/raspikabek" target="_blank">
                <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="width: 11em !important;" >
              </a>
              `
            },
            {
              html: `
                <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
                </a>
              `,
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SFDocs Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/raspikabek/sfdocs-site/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/raspikabek/sfdocs-site/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
