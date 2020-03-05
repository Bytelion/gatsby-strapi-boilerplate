/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for article nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});


// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getArticles = makeRequest(graphql, `
    {
      allStrapiArticle {
        edges {
          node {
            id
            title
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiArticle.edges.forEach(({ node }) => {
      createPage({
        path: `/articles/${node.title.split(' ').join('_').toLowerCase()}`,
        component: path.resolve(`src/templates/article.js`),
        context: {
          id: node.id,
        },
      })
    })
  });

  const getEvents = makeRequest(graphql, `
    {
      allStrapiEvent {
        edges {
          node {
            id
            title
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each event.
    result.data.allStrapiEvent.edges.forEach(({ node }) => {
      createPage({
        path: `/events/${node.title.split(' ').join('_').toLowerCase()}`,
        component: path.resolve(`src/templates/event.js`),
        context: {
          id: node.id
        }
      })
    })
  });

  // Queries for articles and events nodes to use in creating pages.
  return Promise.all([
    getArticles,
    getEvents
  ])
};