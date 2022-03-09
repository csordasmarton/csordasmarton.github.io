<template>
  <v-timeline dense>
    <v-timeline-item small color="secondary" class="pa-0">
      <v-row>
        <v-col cols="12" :md="1" align-self="center">
          <span>{{ from }} <span v-if="to">- {{ to }}</span></span>
        </v-col>
        <v-col cols="12" :md="11">
          <slot />
        </v-col>
      </v-row>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  name: "OtherProject",
  props: {
    from: { type: String, required: true },
    to: { type: String, default: null },
    company: { type: String, required: true },
  }
};
</script>
