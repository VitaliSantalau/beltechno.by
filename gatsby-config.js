module.exports = {
  pathPrefix: "/beltechno.by",
  siteMetadata: {
    title: "beltechno.by",
    description: "сайт о деятености компании Белтехногрин",
    author: "VS",
    keywords: "купить автомобиль, купить электромобиль",
    siteUrl: "http://beltechno.by"
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Beltechno`,
        short_name: `BT`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: "src/images/icon.png",
        display: "standalone",
        icons: [
          {
            "src": "src/images/maskable_icon_x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any maskable"
          }
        ]
      },
    },
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ffor9iv1ke4m`,
        accessToken: `MxXPkDH2FzN6Xbcglvc8Bli0D1FwJEoRv4cxMly-cIc`,
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`
  ],
}
