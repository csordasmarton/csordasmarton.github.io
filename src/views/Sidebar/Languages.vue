<template>
  <Section
    title="Languages"
    icon="mdi-flag-outline"
  >
    <v-row>
      <v-col
        v-for="item in items"
        :key="item.name"
        class="text-center"
      >
        <v-progress-circular
          rotate="360"
          size="80"
          width="3"
          :value="item.value"
          class="ma-2"
        >
          {{ item.name }}
        </v-progress-circular>
      </v-col>
    </v-row>
  </Section>
</template>

<script>
import Section from "@/views/Section";

export default {
  name: "Languages",
  components: { Section },
  data() {
    return {
      items: [
        { name: "Hungarian", value: 100 },
        { name: "English", value: 80 }
      ]
    };
  }
};
</script>
