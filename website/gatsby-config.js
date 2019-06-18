module.exports = {
  siteMetadata: {
    title: `React-Conflux Documentation`,
    description: `Documentation website for the React-Conflux library, a modularized and elegant state management library modelled after the FLux pattern.`,
    author: `Dustin Myers and Nathan Thomas`
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/static/`
        }
      }
    },
    // Finish
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'React Conflux',
        short_name: 'Conflux',
        start_url: '/',
        background_color: '#06ffa5',
        theme_color: '#06ffa5',
        display: 'standalone',
        icon: 'src/images/conflux-logo-atom.png', // Path is relative to the root of the site
        crossOrigin: `use-credentials`
      }
    },
    `gatsby-plugin-react-helmet`
  ]
};
