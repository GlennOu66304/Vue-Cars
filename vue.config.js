// base url sestting
// this is in vue file, noe in the back ene project, so you do not heed to use import here
module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        "/api": {
          target: "http://localhost:8899",
        },
      },
    },
  },
};
