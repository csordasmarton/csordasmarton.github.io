<template>
  <v-row>
    <v-col>
      <v-card
        tile
        flat
      >
        <v-card-title class="pt-0">
          <a :href="link" target="_blank">
            {{ title }}
          </a>
        </v-card-title>
        <v-card-subtitle class="mt-0">
          <Keywords :value="keywords" />
        </v-card-subtitle>

        <v-card-text>
          <slot />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" :md="2">
      <a :href="publicPath(screenshot)" target="_blank">
        <v-img :src="publicPath(screenshot)" />
      </a>
    </v-col>
  </v-row>
</template>

<script>
import Keywords from "./Keywords";

export default {
  name: "Project",
  components: { Keywords },
  props: {
    title: { type: String, required: true },
    link: { type: String, required: true },
    keywords: { type: Array, default: () => ([]) },
    screenshot: { type: String, default: null }
  }
};
</script>
