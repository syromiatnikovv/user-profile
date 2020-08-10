<template>
  <v-app>
    <navbar></navbar>

    <v-main>
      <v-slide-y-transition mode="out-in">
        <router-view></router-view>
      </v-slide-y-transition>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: { Navbar },

  data: () => ({
    //
  }),
}
</script>
