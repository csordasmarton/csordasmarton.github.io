<template>
  <Section
    title="Work experiences"
    icon="mdi-star-circle-outline"
  >
    <v-card
      v-for="item in items"
      :key="item.title"
      tile
      flat
    >
      <v-card-title>{{ item.title }}</v-card-title>
      <v-card-subtitle>{{ item.from }} - {{ item.to }}</v-card-subtitle>
      <v-card-text>{{ item.description }}</v-card-text>
    </v-card>
  </Section>
</template>

<script>
import Section from "@/views/Section";

export default {
  name: "Experience",
  components: { Section },
  data() {
    return {
      items: [
        {
          title: "Ericsson",
          from: "2015",
          description: `Developing Clang based static analysis tools
                        (CodeCompass / CodeChecker)`
        },
        {
          title: "Pontez Holding Kft.",
          from: "2013",
          to: "2014",
          description: `Developed web pages using Symfony and Laravel
                        frameworks`
        },
      ]
    };
  }
};
</script>
