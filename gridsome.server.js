// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// const axios = require('axios')

// module.exports = function (api) {
//   api.loadSource(async actions => {
//     const collection = actions.addCollection('Post')

//     const { data } = await axios.get('https://api.example.com/posts')

//     for (const item of data) {
//       collection.addNode({
//         id: item.id,
//         title: item.title,
//         content: item.content
//       })
//     }
//   })
// }