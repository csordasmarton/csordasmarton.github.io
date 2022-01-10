<template>
  <v-card tile flat>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>{{ from }} - {{ to }}</v-card-subtitle>
    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Experience",
  props: {
    title: { type: String, required: true },
    from: { type: String, default: "" },
    to: { type: String, default: "" }
  }
};
</script>
