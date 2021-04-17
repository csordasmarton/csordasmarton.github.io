import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

const opts = {
  iconfont: "mdi",
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#424952",
        secondary: "#2c87c7"
      }
    },
  }
};

export default new Vuetify(opts);
