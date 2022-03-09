<template>
  <Section
    title="Contact"
    icon="mdi-phone-outline"
  >
    <v-row
      v-for="item in items"
      :key="item.title"
      :class="item.className"
    >
      <v-col class="pr-2" cols="auto">
        <v-icon :title="item.title">{{ item.icon }}</v-icon>
      </v-col>
      <v-col>
        <a
          v-if="item.link"
          :href="item.link"
          target="_blank"
        >
          <span>{{ item.value }}</span>
        </a>

        <span v-else>
          {{ item.value }}
        </span>
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
        // {
        //   title: "Phone",
        //   value: "+36-20-xxx-xxxx",
        //   icon: "mdi-cellphone",
        //   className: "print-only"
        // },
        {
          title: "Email",
          value: "csordasmarton92@gmail.com",
          icon: "mdi-email"
        },
        {
          title: "Web page",
          value: "csordasmarton.github.io",
          link: "https://csordasmarton.github.io",
          icon: "mdi-web"
        },
        {
          title: "GitHub Profile",
          value: "GitHub Profile",
          link: "https://github.com/csordasmarton",
          icon: "mdi-github"
        },
        {
          title: "Linkedin",
          value: "Linkedin",
          link: "https://www.linkedin.com/in/csordasmarton/",
          icon: "mdi-linkedin"
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

<style lang="scss" scoped>
.print-only {
  display: none;

  @media print {
    & {
      display: flex;
    }
  }
}
</style>
