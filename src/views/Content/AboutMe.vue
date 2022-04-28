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

    In my latest <i>7 years</i> I worked for <i>Ericsson</i> mainly on open
    source projects. This was my first time I worked in a multinational
    environment and I really enjoyed it.<br><br>

    In my first <i>2 years</i> I worked on a code comprehension tool called
    <a href="https://github.com/Ericsson/codecompass" target="_blank">
      CodeCompass
    </a>.
    In this project I was responsible to implement most of the new features
    and bug fixes, create a new pluginable architecture, introduce a modern
    build system and others. I used different programming languages and
    technologies in this project such as <i>C/C++</i>, <i>JavaScript</i>,
    <i>HTML</i>, <i>CSS</i>, <i>CMake</i>, <i>Jenkins</i>, <i>Git</i>.
    I really loved it because I also learned a lot from my colleagues.<br><br>

    After this project I worked on another open-source tool called
    <a href="https://github.com/Ericsson/CodeChecker" target="_blank">
      CodeChecker
    </a>
    which is an analyzer tooling, defect database and viewer extension to find,
    view and manage potential software bugs in your product. On this project
    I was responsible to implement most of the new features, provide bug fixes,
    write test cases and documentations, communicate with the open-source and
    internal users, etc. I also did service management things in this project
    such as to create the service architecture, manage it, creating backups and
    do the upgrades. I used many programming languages and technologies in this
    project such as <i>Python</i>, <i>JavaScript</i>, <i>TypeScript</i>,
    <i>CSS</i>, <i>SASS</i>, <i>Vue.js</i>, <i>Docker</i>,
    <i>PostgreSQL</i>, <i>Jenkins</i> etc.<br><br>

    Over the years on this project I also became a <i>Lead developer</i>. As a
    Lead Developer I was responsible for the architectural vision, code reviews,
    sprint and roadmap planning, release management, supervising newcomers and
    interns, quality of the product, building the open-source community and
    many more.
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
