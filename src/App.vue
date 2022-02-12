<template>
  <v-app id="app">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
.v-main {
  background-color: #fafbfc;
}

@media print {
  @page {
    size: 420mm 594mm;
  }

  body {
    zoom: 130%;
  }

  .container {
    max-width: 100%;
  }

  .v-main .container:first-of-type {
    display: block;
  }

  .pagebreak {
    page-break-before: always;
  }
}
</style>
