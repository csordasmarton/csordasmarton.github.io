<template>
  <Section
    title="Educations"
    icon="mdi-school-outline"
  >
    <v-row
      v-for="item in items"
      :key="item.title"
    >
      <v-col cols="2">
        {{ item.from }} - {{ item.to }}
      </v-col>
      <v-col>
        <v-list-item>
          <v-list-item-content class="pa-0">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle>
              <a :href="item.link" target="_blank">{{ item.name }}</a>,
              {{ item.location }}
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
          title: "Photographer",
          name: "Soter-Line",
          link: "https://www.soterline.hu/",
          location: "Hungary",
          from: "2020",
          to: "2021"
        },
        {
          title: "Master of Science in Computer Science",
          name: "Eötvös Loránd University",
          link: "https://www.inf.elte.hu/",
          location: "Hungary",
          from: "2014",
          to: "2017"
        },
        {
          title: "Bachelor of Science in Computer Science",
          name: "Eötvös Loránd University",
          link: "https://www.inf.elte.hu/",
          location: "Hungary",
          from: "2011",
          to: "2014"
        },
      ]
    };
  }
};
</script>
