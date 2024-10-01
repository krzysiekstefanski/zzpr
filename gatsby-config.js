module.exports = {
  siteMetadata: {
    title: ``,
    description: ``,
    author: `krzysiekstefanski`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Albert+Sans:300,400,500,600,700,800"],
        },
        active: () => {
          sessionStorage.fontsLoaded = true
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          quality: 75,
          breakpoints: [370, 600, 800, 1080, 1366, 1920],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#f6610d`,
        display: `minimal-ui`,
        icon: `src/images/handball.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-svgr-svgo`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://kstefanski.pl/zzpr/graphql`,
        schema: {
          perPage: 200,
          timeout: 60000,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
