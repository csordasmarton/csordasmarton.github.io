<template>
  <Section
    title="Skills"
    icon="mdi-tune-vertical"
  >
    <v-row
      v-for="(group, idx) in items"
      :key="idx"
      class="mb-2"
    >
      <v-col
        v-for="item in group"
        :key="item.title"
        :cols="12"
        :md="6"
      >
        <div class="align-center">
          <v-icon>{{ item.icon }}</v-icon>
          {{ item.title }}
        </div>
        <v-progress-linear
          color="secondary"
          height="5"
          :value="item.value"
        />
      </v-col>
    </v-row>
  </Section>
</template>

<script>
import Section from "@/views/Section";

export default {
  name: "Skills",
  components: { Section },
  data() {
    return {
      items: [
        [
          { title: "JavaScript", value: 85, icon: "mdi-language-javascript" },
          { title: "Typescript", value: 80, icon: "mdi-language-typescript" },
          { title: "Python", value: 85, icon: "mdi-language-python" },
          { title: "Java / Kotlin", value: 70, icon: "mdi-language-java" },
          { title: "C/C++", value: 65, icon: "mdi-language-cpp" },

          { title: "CSS / Sass / Less", value: 75, icon: "mdi-language-css3" },

          { title: "Vuejs", value: 90, icon: "mdi-vuejs" },
          { title: "React", value: 90, icon: "mdi-react" },
          { title: "Angular", value: 65, icon: "mdi-angular" },

          { title: "Databases (SQLite, PostgresSQL, MySQL)", value: 75,
            icon: "mdi-database" },
          { title: "Git", value: 75, icon: "mdi-git" },
          { title: "Docker", value: 75, icon: "mdi-docker" }
        ]
      ]
    };
  }
};
</script>
