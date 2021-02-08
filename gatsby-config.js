require("dotenv").config()

module.exports = {
  siteMetadata: {
    // edit below
    title: `turutupa's garage`,
    author: `Alberto Delgado`,
    description: `Alberto Delgado, passionate for coding, innovation and learning new technologies.`,
    siteUrl: `https://turutupa.com`,
    social: {
      twitter: `PereBlanc`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // edit below
        trackingId: process.env.TRACKING_ID,
      },
    },
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/activity`,
        name: `activity`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          `gatsby-remark-images`,
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              theme: "one-dark",
            },
          },
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `turutupa's garage`,
        short_name: `turutupa`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        // edit below
        icon: `content/assets/programmer.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://app.us7.list-manage.com/subscribe/post?u=45b8b67bc36cbe803bf194ae9&amp;id=01eda8fe63", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges
                .filter(edge => {
                  return !edge.node.frontmatter.draft
                })
                .map(edge => {
                  return Object.assign({}, edge.node.frontmatter, {
                    description: edge.node.excerpt,
                    date: edge.node.frontmatter.date,
                    tags: edge.node.frontmatter.tags,
                    url:
                      site.siteMetadata.siteUrl +
                      "/blog/" +
                      edge.node.fields.slug,
                    guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                    custom_elements: [
                      {
                        "content:encoded": edge.node.html.replace(
                          /(?<=\"|\s)\/static\//g,
                          `${site.siteMetadata.siteUrl}\/static\/`
                        ),
                      },
                    ],
                  })
                })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                        tags
                        draft
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Alberto Delgado's RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/",
          },
        ],
      },
    },
  ],
}
