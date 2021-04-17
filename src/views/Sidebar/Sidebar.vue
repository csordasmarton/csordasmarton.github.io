<template>
  <v-card outlined>
    <v-container>
      <v-row class="py-0" justify="space-around">
        <v-col class="text-center">
          <Avatar />

          <p class="ma-0 mt-2 text-h4 secondary--text">
            Márton Csordás
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-divider />

    <Personal />

    <v-divider />

    <Contact />

    <v-divider />

    <Interest />

    <v-divider />

    <Languages />
  </v-card>
</template>

<script>
import Avatar from "./Avatar";
import Contact from "./Contact";
import Interest from "./Interest";
import Languages from "./Languages";
import Personal from "./Personal";

export default {
  name: "Sidebar",
  components: { Avatar, Contact, Interest, Languages, Personal }
};
</script>
