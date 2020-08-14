<template>
  <v-snackbar v-model="show" :timeout="3500" :color="color">
    <v-icon dark left>{{ icon }}</v-icon>

    {{ message }}

    <template v-slot:action="{ attrs }">
      <v-btn icon dark @click="show = false" v-bind="attrs">
        <v-icon size="14">mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data: () => ({
    show: false,
    icon: '',
    message: '',
    color: '',
  }),

  watch: {
    show: function(val) {
      if (!val) {
        this.icon = ''
        this.message = ''
        this.color = ''
      }
    },
  },

  methods: {
    success(message) {
      this.color = 'green'
      this.icon = 'mdi-check-circle'
      this.message = message
      this.show = true
    },

    error(message) {
      this.color = 'red'
      this.icon = 'mdi-alert-circle'
      this.message = message
      this.show = true
    },
  },
}
</script>
