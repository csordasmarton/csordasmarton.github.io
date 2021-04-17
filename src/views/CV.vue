<template>
  <v-container fill-height>
    <v-row>
      <v-col cols="3">
        <Sidebar />
      </v-col>
      <v-col cols="9">
        <Content />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card outlined>
          <Projects />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Content from "./Content/Content";
import Projects from "./Projects";
import Sidebar from "./Sidebar/Sidebar";

export default {
  name: "CV",
  components: { Content, Projects, Sidebar }
};
</script>
