module.exports = {
  siteMetadata: {
    title: `Hire a hubby`,
    description: `Home maintenance and renovation contracting.`,
    author: `Shelby Smith`,
    siteUrl: `https://hireahubby.us`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Avenir`,
                variants: [`300`, `400`, `500`],
              },
                            {
                family: `Avenir`,
                variants: [`300`, `400`, `500`],
              },
            ],
          },
        },
      },
    }
  ],
}
