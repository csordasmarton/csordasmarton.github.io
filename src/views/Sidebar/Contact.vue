<template>
  <Section
    title="Contact"
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
  name: "Contact",
  components: { Section },
  data() {
    return {
      items: [
        {
          title: "Email",
          value: "csordasmarton92@gmail.com",
          icon: "mdi-email"
        },
        {
          title: "Location",
          value: "Budapest",
          icon: "mdi-map-marker"
        }
      ]
    };
  }
};
</script>
