exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allContentfulCar {
        edges {
          node {
            id
          }
        }
      }
      allContentfulCup {
        edges {
          node {
            id
          }
        }
      }
      allContentfulPaper {
        edges {
          node {
            id
          }
        }
      }
      allContentfulVegetable {
        edges {
          node {
            id
          }
        }
      }
    } 
  `)  
 
 
  results.data.allContentfulCar.edges.forEach(edge => {
    createPage({
      path: `/cars/${edge.node.id}/`,
      component: require.resolve("./src/template/car.js"),
      context: {slug: edge.node.id},
    })
  })

  results.data.allContentfulCup.edges.forEach(edge => {
    createPage({
      path: `/cups/${edge.node.id}/`,
      component: require.resolve("./src/template/cup.js"),
      context: {slug: edge.node.id},
    })
  })

  results.data.allContentfulPaper.edges.forEach(edge => {
    createPage({
      path: `/rolls/${edge.node.id}/`,
      component: require.resolve("./src/template/paper.js"),
      context: {slug: edge.node.id},
    })
  })

  results.data.allContentfulVegetable.edges.forEach(edge => {
    createPage({
      path: `/vegetables/${edge.node.id}/`,
      component: require.resolve("./src/template/vegetable.js"),
      context: {slug: edge.node.id},
    })
  })
}