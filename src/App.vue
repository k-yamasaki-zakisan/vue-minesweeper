<template>
  <v-app>
    <v-main>
      <git-hub />
      <grid />
    </v-main>
  </v-app>
</template>

<script>
import GitHub from "./components/GitHub";
import Grid from './components/Grid';

export default {
  name: 'App',

  components: {
    GitHub,
    Grid
  },

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  background: #708090;
}
</style>