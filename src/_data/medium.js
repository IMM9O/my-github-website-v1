var axios = require('axios');

var url = process.env.MEDIUM_FEED || 'https://medium.com/feed/@IMM9O';
var authorLink = 'https://medium.com/@IMM9O';

module.exports = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://api.rss2json.com/v1/api.json?rss_url=' + url)
      .then((response) => {
        const res = response.data.items;
        const posts = res
          .filter((item) => item.categories.length > 0)
          .map((item) => ({ ...item }));
        resolve({ url, posts });
      });
  });
};
