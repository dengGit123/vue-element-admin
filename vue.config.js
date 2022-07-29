// const dev = 'http://localhost:3000';
module.exports = {
  lintOnSave: process.env.NODE_ENV === 'production',
  devServer: {
    // proxy: {
    //   '/dev': {
    //     target: dev,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/dev': ''
    //     }
    //   }
    // }
  }
};
