export default {
  install (Vue) {
    Vue.mixin({
      methods: {
        publicPath (path) {
          return process.env.ASSET_PATH + path;
        }
      }
    });
  }
};
