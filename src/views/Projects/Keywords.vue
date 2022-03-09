<template>
  <div>
    <v-chip
      v-for="keyword in value"
      :key="keyword"
      class="mr-2 mb-2"
      outlined
    >
      {{ keyword }}
    </v-chip>
  </div>
</template>

<script>
export default {
  name: "Keywords",
  props: {
    value: { type: Array, required: true }
  }
};
</script>
