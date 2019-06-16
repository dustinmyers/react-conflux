module.exports = {
  siteMetadata: {
    title: `React-Conflux Documentation`,
    description: `Documentation website for the React-Conflux library, a modularized and elegant state management library modelled after the FLux pattern.`,
    author: `Dustin Myers and Nathan Thomas`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
  ],
};
