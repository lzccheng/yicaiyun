module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          red: '#03a9f4',
          blue: '#3eaf7c',
          orange: '#f08d49',
          green: 'red',
          'text-color': '#111',
        }
      }
    }
  },
  devServer: {
    disableHostCheck: true
  }
};