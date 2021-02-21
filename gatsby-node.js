exports.createPages = async ({ actions: { createPage }, graphql }) => {
  /*const results = await graphql(`
    {
      allGroupsJson {
        edges {
          node {
            slug
          }
        }
      }
      allProductsJson {
        edges {
          node {
            slug
          }
        }
      }
      allProductJson {
        edges {
          node {
            slug
          }
        }
      }
    } 
  `)  
 
 
  results.data.allGroupsJson.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: require.resolve("./src/templates/listsubgroups.js"),
      context: {slug: edge.node.slug},
    })
  })

  results.data.allProductsJson.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: require.resolve("./src/templates/listproducts.js"),
      context: {slug: edge.node.slug} 
    })
  })

  results.data.allProductJson.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: require.resolve("./src/templates/product.js"),
      context: {slug: edge.node.slug} 
    })
  })
 */   
}