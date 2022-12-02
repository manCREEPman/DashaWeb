<template>
  <v-app>
    <v-main>
      <Navigation/>
    </v-main>
  </v-app>
</template>
<style src="@/assets/styles/common-styles.css">
</style>

<script>

import Navigation from '@/components/Navigation.vue'
export default {
  name: 'App',

  components: { Navigation },

  data: () => ({
    //
  }),
};
</script>
