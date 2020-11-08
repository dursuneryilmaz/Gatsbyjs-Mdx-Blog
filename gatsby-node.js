// exports.createPages = async function ({ graphql, actions }) {
//     const {data} = await graphql`
//       query {
//         allMdx(sort: {order: DESC, fields: frontmatter___date}) {
//             edges {
//               node {
//                 frontmatter {
//                   slug
//                 }
//                 id
//               }
//             }
//           }
//       }
//     `
    
//     // create paginated pages for post
//     const postPerPage = 3
//     const numPages = Math.ceil(data.allMdx.edges.lengt / postPerPage)

//     Array.from({length:numPages}).forEach((_, i, ) => {
//         actions.createPages({
//             path: i === 0 ? `/` : `/${i + 1}`,
//             component: require.resolve("./src/themplates/allPost.js"),
//             context: {
//                 limit: postPerPage,
//                 skip: i * postPerPage,
//                 numPages,
//                 currentPage: i + 1,
//             }
//         })
//     })

//     // Create single blog post
//     data.allMdx.edges.forEach(edge => {
//       const slug = edge.node.frontMatter.slug
//       const id = edge.node.id
//       actions.createPages({
//         path: slug,
//         component: require.resolve(`./src/theplates/singlePost.js`),
//         context:{id},

//       })
//     })
    
// }