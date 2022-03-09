<template>
  <v-timeline-item small color="secondary" class="pa-0">
    <v-row>
      <v-col cols="12" :md="2" align-self="center">
        <span>{{ from }} - {{ to }}</span>
      </v-col>

      <v-col cols="12" :md="10">
        <v-card tile flat>
          <v-card-title>
            <v-icon class="pr-2" color="secondary">
              mdi-city-variant-outline
            </v-icon>
            {{ company }}
          </v-card-title>
          <v-card-text>
            <slot />
          </v-card-text>
        </v-card>
        <slot name="projects" />
      </v-col>
    </v-row>

    <v-divider />
  </v-timeline-item>
</template>

<script>
export default {
  name: "WorkExperience",
  props: {
    from: { type: String, required: true },
    to: { type: String, default: "" },
    company: { type: String, required: true },
  }
};
</script>
