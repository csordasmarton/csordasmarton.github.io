<template>
  <Section
    title="Personal"
    icon="mdi-phone-outline"
  >
    <v-row
      v-for="item in items"
      :key="item"
    >
      <v-col class="pr-2" cols="auto">
        <v-icon :title="item.title">{{ item.icon }}</v-icon>
      </v-col>
      <v-col>
        {{ item.value }}
      </v-col>
    </v-row>
  </Section>
</template>

<script>
import Section from "@/views/Section";

export default {
  name: "Personal",
  components: { Section },
  data() {
    return {
      items: [
        {
          title: "Name",
          value: "Márton Csordás",
          icon: "mdi-badge-account-outline"
        },
        {
          title: "Date of birthday",
          value: "31 May 1992",
          icon: "mdi-cake-variant"
        },
        {
          title: "Nationality",
          value: "Hungarian",
          icon: "mdi-flag"
        },
        {
          title: "Relationship",
          value: "Married",
          icon: "mdi-human-male-female"
        },
      ]
    };
  }
};
</script>
