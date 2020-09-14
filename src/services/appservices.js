let appservice = {
  getAllMediumBlogs: (id) => {
    return new Promise((resolve, reject) => {
      let baseURL =
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/" +
        id;

      fetch(baseURL)
        .then((res) => res.json())
        .then((data) => {
          if (data.items.length > 0) {
            resolve({
              success: true,
              data: data,
            });
          }
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
};
export default appservice;
