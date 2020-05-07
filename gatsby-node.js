const path = require(`path`)

const cities = require("./src/components/data")

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