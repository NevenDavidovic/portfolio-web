const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        // Options for less-loader can be added here
        lessOptions: {
          // Example: Enable JavaScript in Less files
          javascriptEnabled: true,

          // Example: Custom global Less variables
        },
      },
    },
  },
});
