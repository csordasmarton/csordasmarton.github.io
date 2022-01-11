<template>
  <Section
    title="Trainings"
    icon="mdi-school-outline"
  >
    <v-row
      v-for="item in items"
      :key="item.title"
    >
      <v-col cols="12" :md="2">
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
  name: "Education",
  components: { Section },
  data() {
    return {
      items: [
        {
          title: "Docker administration",
          name: "Component Soft",
          location: "Hungary",
          at: "4-6. September, 2018"
        },
        {
          title: "Kubernetes administration",
          name: "Component Soft",
          location: "Hungary",
          at: "24-26. September, 2018"
        },
      ]
    };
  }
};
</script>
