const path = require(`path`)

const cities = require("./src/components/data")

/*
exports.createPages = async ({ actions: { createPage } }) => {
  // Create a page for each

    cities.forEach(city => {
    createPage({
      path: `/${city.name}`,
      component: require.resolve("./src/templates/template.js"),
      context: { city },
    })
  })
}
*/

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  cities.forEach(city => {
    createPage({
      path: `/${city.name}`,
      component: require.resolve("./src/templates/template.js"),
      context: { city },
    })
  })

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlogPost {
          edges {
            node {
              id
              slug
              title
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      result.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
          path: edge.node.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug: edge.node.slug,
          },
        })
      })
      resolve()
    })
  })
}
