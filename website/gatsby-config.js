module.exports = {
  siteMetadata: {
    siteTitle: `React-Conflux`,
    defaultTitle: `React-Conflux`,
    siteTitleShort: `gatsby-theme-docs`,
    siteDescription: `A modularized state management system for React utilizing the Context API and React Hooks.`,
    siteUrl: `https://github.com/dustinmyers/react-conflux`,
    siteAuthor: `Nathan Thomas and Dustin Myers`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#06FFA5`,
    basePath: `/`,
    footer: 'Made with 💚'
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/dustinmyers/react-conflux`,
        baseDir: `website/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://github.com/dustinmyers/react-conflux`
      }
    },
    `gatsby-plugin-offline`
  ]
};
