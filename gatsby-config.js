const contentful = require('contentful');
const manifestConfig = require('./manifest-config');
require('dotenv').config();

const { ACCESS_TOKEN, SPACE_ID } = process.env;

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

module.exports = client.getEntries().then(entries => {
  const aboutEntry = entries.items.find(
    entry => entry.sys.contentType.sys.id === 'about',
  );

  const about = aboutEntry.fields;

  return {
    plugins: [
      'gatsby-plugin-react-helmet',
      {
        resolve: 'gatsby-plugin-manifest',
        options: manifestConfig,
      },
      'gatsby-plugin-styled-components',
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [`cabin`, `Open Sans`],
        },
      },
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: SPACE_ID,
          accessToken: ACCESS_TOKEN,
        },
      },
      {
        resolve: `gatsby-source-medium`,
        options: {
          username: about.mediumUser,
        },
      },
      {
        resolve: `gatsby-plugin-pinterest`,
        options: {
          // Set to true to display a bigger button
          tall: true, // default
          // Set to true to hide the text and display only a round P button
          round: false // default
        }
      },
      {
        resolve: "gatsby-source-graphql",
        options: {
          // This type will contain remote schema Query type
          typeName: "SWAPI",
          // This is field under which it's accessible
          fieldName: "swapi",
          // Url to query from
          url: "https://api.graphcms.com/simple/v1/swapi",
        },
      },
      //{
      //  resolve: "gatsby-source-graphql",
      //  options: {
      //    typeName: "GitHub",
      //    fieldName: "github",
          // Url to query from
      //    url: "https://api.github.com/graphql", //"https://api.pinterest.com/graphql/v1/boards/neilputtick/happenings/",
          // HTTP headers
      //    headers: {
            // Learn about environment variables: https://gatsby.app/env-vars
      //      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
      //    },
      //    // Additional options to pass to node-fetch
      //    fetchOptions: {},
      //  },
      //},
      'gatsby-transformer-remark',
      'gatsby-plugin-offline',
    ],
  };
});
