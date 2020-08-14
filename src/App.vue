<template>
  <v-app>
    <navbar></navbar>

    <v-main>
      <v-slide-y-transition mode="out-in">
        <router-view></router-view>
      </v-slide-y-transition>
    </v-main>

    <notification ref="notification"></notification>
  </v-app>
</template>

<script>
import Vue from 'vue'
import Navbar from '@/components/Navbar'
import Notification from '@/components/Notification'

export default {
  components: {
    Navbar,
    Notification,
  },

  mounted() {
    Vue.prototype.$notification = this.$refs.notification
  },
}
</script>
