const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const posts = graphql(`
    {
      allWpPost(sort: {fields: [date]}) {
        edges {
          node {
            title
            excerpt
            slug
            date(formatString: "DD-MM-YYYY")
          }
        }
      }
    }

  `).then(result => {
    result.data.allWpPost.edges.forEach(({ node }) => {
      createPage({
        // Decide URL structure
        path: node.slug,
        // path to template
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
        },
      })
    })
  })

  const galleryZZPR = graphql(`
    {
      allWpPage(filter: {id: {eq: "cG9zdDoxMjE5"}}) {
        nodes {
          galeria {
            listaGalerii {
              nazwaGalerii
            }
          }
        }
      }
    }

  `).then(result => {
    result.data.allWpPage.nodes[0].galeria.listaGalerii?.forEach(({ nazwaGalerii }, i) => {
      createPage({
        // Decide URL structure
        path: "/galerie/puchar-zzpr/" + nazwaGalerii.toLowerCase().normalize("NFD").replace("ł", "l").replace("ó", "o").replace(/\s+/g, '-'),
        // path to template
        component: path.resolve(`./src/templates/gallery.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          id: i,
          page: "cG9zdDoxMjE5",
          slug: nazwaGalerii.toLowerCase().normalize("NFD").replace("ł", "l").replace("ó", "o").replace(/\s+/g, '-'),
        },
      })
    })
  })

  const galleryConference = graphql(`
    {
      allWpPage(filter: {id: {eq: "cG9zdDoxMjIy"}}) {
        nodes {
          galeria {
            listaGalerii {
              nazwaGalerii
            }
          }
        }
      }
    }

  `).then(result => {
    result.data.allWpPage.nodes[0].galeria.listaGalerii?.forEach(({ nazwaGalerii }, i) => {
      createPage({
        // Decide URL structure
        path: "/galerie/konferencje/" + nazwaGalerii.toLowerCase().normalize("NFD").replace("ł", "l").replace("ó", "o").replace(/\s+/g, '-'),
        // path to template
        component: path.resolve(`./src/templates/gallery.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          id: i,
          page: "cG9zdDoxMjIy",
          slug: nazwaGalerii.toLowerCase().normalize("NFD").replace("ł", "l").replace("ó", "o").replace(/\s+/g, '-'),
        },
      })
    })
  })

  const galleryCadre = graphql(`
    {
      allWpPage(filter: {id: {eq: "cG9zdDoxMjEy"}}) {
        nodes {
          galeria {
            listaGalerii {
              nazwaGalerii
            }
          }
        }
      }
    }

  `).then(result => {
    result.data.allWpPage.nodes[0].galeria.listaGalerii?.forEach(({ nazwaGalerii }, i) => {
      createPage({
        // Decide URL structure
        path: "/galerie/kadry/" + nazwaGalerii.toLowerCase().normalize("NFD").replace("ł", "l").replace("ó", "o").replace(/\s+/g, '-'),
        // path to template
        component: path.resolve(`./src/templates/gallery.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          id: i,
          page: "cG9zdDoxMjEy",
          slug: nazwaGalerii.toLowerCase().normalize("NFD").replace("ł", "l").replace("ó", "o").replace(/\s+/g, '-'),
        },
      })
    })
  })

  return Promise.all([posts, galleryZZPR, galleryConference, galleryCadre])
}