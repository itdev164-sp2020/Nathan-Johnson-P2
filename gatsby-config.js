module.exports = {
  siteMetadata: {
    title: `Industrial E Waste and Electronics Recycling`,
    description: `NJT Automation Salvage wants to purchase surplus manufacturing electronics and recycle commercial e-waste `,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PLC Drive HMI Controls Industrial Electronics and Automation`,
        short_name: `NJT`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/NJT.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
        disableAutoprefixing: false,
        disableMinification: false,
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
