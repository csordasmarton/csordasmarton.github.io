<template>
  <Section
    title="About me"
    icon="mdi-information-outline"
  >
    My name is <b>Márton Csordás</b> and I am an experienced
    <i>Full Stack Software Developer</i> with over
    <b>+{{ experience }} years</b> of experience. I like learning new things and
    tools every day. If I don't know something I will learn it.<br><br>

    I have successfully completed my <i>Bachelor’s</i> and <i>Master’s</i>
    Degrees in <i>Computer Science</i> in Budapest at the
    <i>Eötvös Loránd University</i>. During my University studies I have met
    with lots of programming languages and technologies such as <i>C++</i>,
    <i>Python</i>, <i>Java</i>, <i>C#</i>, <i>JavaScript</i>, <i>Haskell</i>,
    <i>Git</i>, <i>Databases</i>, <i>Compilers</i> etc.<br><br>

    Over the years I worked for multiple multinational companies on multiple
    projects by using different programming languages.<br><br>
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
