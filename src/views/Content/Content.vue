<template>
  <v-card outlined>
    <AboutMe />

    <v-divider />

    <Education />

    <v-divider />

    <Trainings />

    <v-divider />

    <Award />

    <v-divider class="pagebreak" />

    <Skills />
  </v-card>
</template>

<script>
import AboutMe from "./AboutMe";
import Award from "./Award";
import Education from "./Education";
import Skills from "./Skills";
import Trainings from "./Trainings";

export default {
  name: "Content",
  components: { AboutMe, Award, Education, Skills, Trainings }
};
</script>
