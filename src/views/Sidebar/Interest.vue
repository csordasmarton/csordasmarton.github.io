<template>
  <Section
    title="Interest"
    icon="mdi-run-fast"
  >
    <v-row>
      <v-col
        v-for="item in items"
        :key="item.name"
        class="text-center"
      >
        <v-icon class="pa-1 outlined">{{ item.icon }}</v-icon>
        <div>{{ item.name }}</div>
      </v-col>
    </v-row>
  </Section>
</template>

<script>
import Section from "@/views/Section";

export default {
  name: "Interest",
  components: { Section },
  data() {
    return {
      items: [
        { name: "Photography", icon: "mdi-camera" },
        { name: "Cooking", icon: "mdi-chef-hat" },
        { name: "Reading", icon: "mdi-book-open-variant" },
        { name: "Series", icon: "mdi-filmstrip" },
        { name: "Playstation", icon: "mdi-google-controller" },
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.outlined {
  border: 3px solid currentColor;
  border-radius: 50%;
}
</style>