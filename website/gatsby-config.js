module.exports = {
  siteMetadata: {
    title: `React-Conflux Documentation`,
    description: `Documentation website for the React-Conflux library, a modularized and elegant state management library modeled after the FLux pattern.`,
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
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/conflux-logo-atom.png', // Path is relative to the root of the site
        crossOrigin: `use-credentials`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ]
};
