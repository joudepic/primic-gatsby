module.exports = {
  siteMetadata: {
    title: "prismic",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: '@prismicio/gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'bep-test-landing', // required
        defaultLang: 'en-us', // optional, but recommended
        pages: [{ // optional
          type: 'Page', // TypeName from prismic
          match: '/:uid', // pages will be generated under this pattern
          path: '/', // optional path for unpublished documents
          component: require.resolve('./src/templates/page.js'),
        }],
        /*path: '/preview', // optional, default: /preview
        previews: true, // optional, default: false
        extraPageFields: 'article_type', // optional, extends pages query to pass extra fields
        sharpKeys: [
          /image|photo|picture/, // (default)
          'profilepic',
        ],*/
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
