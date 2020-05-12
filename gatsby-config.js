const siteMetadata = {
  // Update the following values to what you please
  title: `WASHED🍻`,
  description: `I have too many sneakers.`,
  author: `smn_phx`,
  // Add your socials here
  bio: `self taught artist currently experimenting with web development. I have too many sneakers.`,
  socials: [
    {
      name: "IG",
      url: "https://www.instagram.com/smn_phx/",
    },
    {
      name: "HOME",
      url: "https://ogdaronc.co",
    },
  ],
}

const plugins = [
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdowns`,
      path: `${__dirname}/src/posts`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-transformer-remark`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-simple`,
      short_name: `simple`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#333`,
      display: `minimal-ui`,
      icon: `src/images/IMG_0080 2.jpg`, // This path is relative to the root of the site.
    },
  },
  {
    resolve: `gatsby-plugin-disqus`,
    options: {
      // replace the shortname with your own
      // how to get Disqus shortname https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: `ogdaronc`,
    },
  },
  {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /assets/,
      },
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // The property ID; the tracking code won't be generated without it
      trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      // Defines where to place the tracking script - `true` in the head and `false` in the body
      head: false,
      // Setting this parameter is optional
      anonymize: true,
      // Setting this parameter is also optional
      respectDNT: true,
      // Avoids sending pageview hits from custom paths
      exclude: ["/preview/**", "/do-not-track/me/too/"],
      // Delays sending pageview hits on route update (in milliseconds)
      pageTransitionDelay: 0,
      // Enables Google Optimize using your container Id
      optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
      // Enables Google Optimize Experiment ID
      experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
      // Set Variation ID. 0 for original 1,2,3....
      variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
      // Any additional optional fields
      sampleRate: 5,
      siteSpeedSampleRate: 10,
      cookieDomain: "example.com",
    },
  },
  `gatsby-plugin-sass`,
  `gatsby-plugin-offline`,
]

module.exports = {
  siteMetadata: siteMetadata,
  pathPrefix: "/gatsby-starter-simple", // REMOVE IF NOT DEPLOYING TO GH-PAGES
  plugins: plugins,
}
