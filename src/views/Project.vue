<template>
  <v-timeline-item
    small
    color="secondary"
    class="pa-0"
  >
    <v-row>
      <v-col cols="1" align-self="center">
        <span>{{ from }}</span>
        <span v-if="active">-</span>
        <span v-else-if="to">- {{ to }}</span>
      </v-col>

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
            <v-chip
              v-for="keyword in keywords"
              :key="keyword"
              class="mr-2 mb-2"
              outlined
            >
              {{ keyword }}
            </v-chip>
          </v-card-subtitle>

          <v-card-text>
            <slot />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="2">
        <a :href="publicPath(screenshot)" target="_blank">
          <v-img
            :src="publicPath(screenshot)"
          />
        </a>
      </v-col>
    </v-row>

    <v-divider />
  </v-timeline-item>
</template>

<script>
export default {
  name: "Project",
  props: {
    title: { type: String, required: true },
    link: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String, default: null },
    active: { type: Boolean, default: false },
    company: { type: String, default: null },
    keywords: { type: Array, default: () => ([]) },
    screenshot: { type: String, default: null },
  }
};
</script>
