module.exports = {
  siteMetadata: {
    title: `NJT Automation Salvage and Industrial E-Waste`,
    description: `NJT Automation Salvage wants to purchase surplus manufacturing electronics and recycle commercial e-waste `,
    author: `Nathan Johnson`,
    contact: {
      name: "Nathan Johnson",
      company: "NJT Automation Salvage",
      address: "2122 N Prospect Ave, Milwaukee, WI 53202",
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: `81u1exxv2tk1`,
        accessToken: `GtHgaO6gx0U9-DpDlF56hjCmWjjTT9j8ldal5s6ppV0`,
      },
    },
    `gatsby-plugin-react-helmet`,
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
          injectFirst: false,
        },
        disableAutoprefixing: false,
        disableMinification: false,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
