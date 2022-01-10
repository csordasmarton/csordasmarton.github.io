<template>
  <Section
    title="Work experiences"
    icon="mdi-star-circle-outline"
  >
    <Experience title="Ericsson" from="2015">
      In my first 2 years I worked on an open-source code comprehension
      and navigation tool called
      <!-- eslint-disable max-len -->
      <a href="https://github.com/Ericsson/codecompass" target="_blank">CodeCompass</a>.
      After it I worked on another open-source tool called
      <!-- eslint-disable max-len -->
      <a href="https://github.com/Ericsson/codechecker" target="_blank">CodeChecker</a>,
      which helps you to find potentional software bugs in mainly C/C++
      programs. For more information about these projects and my work
      experiences in this company see the <i>Projects</i> section below.
    </Experience>

    <Experience title="Pontez Holding Kft." from="2013" to="2014">
      Developed web pages (Social website, Project management tool, etc.) using
      <b>Symfony</b> and <b>Laravel</b> frameworks.
    </Experience>
  </Section>
</template>

<script>
import Section from "@/views/Section";
import Experience from "./Experience";

export default {
  name: "Experiences",
  components: { Experience, Section }
};
</script>
