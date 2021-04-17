<template>
  <v-card light flat tile>
    <v-card-text>
      <p class="text-h5 primary--text">
        <v-icon v-if="icon" color="secondary">{{ icon }}</v-icon>
        {{ title }}
      </p>

      <slot />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Section",
  props: {
    title: { type: String, required: true },
    icon: { type: String, default: null }
  }
};
</script>
