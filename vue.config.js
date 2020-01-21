module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/style/colors.scss";`
      }
    }
  }
}
