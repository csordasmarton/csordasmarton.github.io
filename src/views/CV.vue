<template>
  <v-container fill-height>
    <v-row>
      <v-col :cols="12" :md="4">
        <Sidebar />
      </v-col>
      <v-col :cols="12" :md="8">
        <Content />
      </v-col>
    </v-row>

    <v-row class="pagebreak">
      <v-col>
        <v-card outlined>
          <WorkExperiences />
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card outlined>
          <OtherProjects />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Content from "./Content/Content";
import OtherProjects from "./Projects/OtherProjects";
import WorkExperiences from "./Projects/WorkExperiences";
import Sidebar from "./Sidebar/Sidebar";

export default {
  name: "CV",
  components: { Content, OtherProjects, Sidebar, WorkExperiences }
};
</script>
