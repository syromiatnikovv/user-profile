<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" no-gutters>
      <v-card v-if="user" class="elevation-3" width="400">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Ваш профиль</v-toolbar-title>
        </v-toolbar>

        <v-card-title class="justify-center">
          <v-avatar class="profile" color="grey" size="200">
            <v-img :src="user.photoSrc"></v-img>
          </v-avatar>
        </v-card-title>

        <v-card-text>
          <v-list>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ user.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-at</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ user.email }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>

      <v-progress-circular
        v-else
        indeterminate
        color="primary"
      ></v-progress-circular>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters['auth/user']
    },
  },
}
</script>
