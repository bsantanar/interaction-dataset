process.env.VUE_APP_API_URL = "http://localhost:3000/api";

module.exports = {
  chainWebpack: config => {
      config
          .plugin('html')
          .tap(args => {
              args[0].title = "Dataset";
              return args;
          })
  },
  "transpileDependencies": [
    "vuetify"
  ]
}