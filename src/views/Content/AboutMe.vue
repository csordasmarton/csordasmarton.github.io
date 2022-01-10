<template>
  <Section
    title="About me"
    icon="mdi-information-outline"
  >
    My name is <b>Márton Csordás</b> and I am an experienced software developer
    with over <b>+{{ experience }} years</b> of experience. In these days I
    mainly code in <b>Python</b> and <b>Javascript</b> / <b>Vue</b>. Currently
    I am working for <i>Ericsson</i> on the <i>CodeChecker</i> open-source
    project as a <b>Core developer</b>. I like learning new things and tools
    everyday. If I don't know something I will learn it...
  </Section>
</template>

<script>
import Section from "@/views/Section";

export default {
  name: "AboutMe",
  components: { Section },
  data() {
    const startedMyFirstJobDate = new Date("2014");
    const currentDate = new Date();
    const difference = new Date(currentDate - startedMyFirstJobDate);

    return {
      experience: Math.abs(difference.getUTCFullYear() - 1970)
    };
  }
};
</script>
