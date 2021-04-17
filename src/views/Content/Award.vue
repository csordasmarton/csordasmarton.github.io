<template>
  <Section
    title="Awards"
    icon="mdi-medal"
  >
    <v-row
      v-for="item in items"
      :key="item.title"
    >
      <v-col cols="3">
        {{ item.at }}
      </v-col>
      <v-col>
        <v-list-item>
          <v-list-item-content class="pa-0">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ item.name }}, {{ item.location }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </Section>
</template>

<script>
import Section from "@/views/Section";

export default {
  name: "Award",
  components: { Section },
  data() {
    return {
      items: [
        {
          title: "Key Contributor",
          name: "Ericsson",
          location: "Hungary",
          at: "2021"
        }
      ]
    };
  }
};
</script>
