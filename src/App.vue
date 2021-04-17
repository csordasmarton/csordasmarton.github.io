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

<style lang="scss" scoped>
.v-main {
  background-color: #fafbfc;
}
</style>
