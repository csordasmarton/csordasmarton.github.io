<template>
  <Section
    title="About me"
    icon="mdi-information-outline"
  >
    I'm an Experienced Software Developer with over <b>+{{ experience }}</b>
    years of experience. I like learning new things and tools everyday. If I
    don't know something I will learn it.
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
