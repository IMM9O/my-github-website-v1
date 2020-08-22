var axios = require('axios');

var url =
  process.env.DEV_FEED || 'https://dev.to/api/articles?username=imm9o';
var postUrl = 'https://dev.to/api/articles';
var authorLink = 'https://dev.to/imm9o';

// Get One Post
const getPostData = async (item) => {
  return axios.get(`${postUrl}/${item.id}`);
};

// Get Array of promises to get each post details 
const getPostsData = async (list) => {
  return Promise.all(list.map((item) => getPostData(item)));
};

const getData = async () => {
  const { data } = await axios.get(url);
  const posts = await getPostsData(data);
  return posts.map(post => ({ ...post.data }));
};

module.exports = getData;

// module.exports = () => {
//   return new Promise((resolve, reject) => {
//     axios.get(url).then((response) => {
//       const blogList = [...response.data];
//       getPostsData(blogList).then((res) => {
//         const posts = res.map((responses) => {
//           return { ...responses.data, authorLink };
//         });
//         resolve(posts);
//       });
//     });
//   });
// };

// getData().then(res => {
//   console.log(res)
// });
