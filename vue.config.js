const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        additionalData: `@import "@/assets/less/main.less";`,
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
});
