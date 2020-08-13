<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>
      <v-icon left>mdi-account</v-icon>
      Профиль пользователя
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <template v-if="!isLoggedIn">
      <v-btn text :to="{ name: 'login' }" class="ml-2">Войти</v-btn>
      <v-btn text :to="{ name: 'register' }" class="ml-2">Регистрация</v-btn>
    </template>

    <template v-else>
      <v-btn text :loading="loading" @click="logout">
        <v-icon left>mdi-exit-to-app</v-icon>
        Выйти
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),

  computed: {
    isLoggedIn() {
      return this.$store.getters['auth/isLoggedIn']
    },
  },

  methods: {
    async logout() {
      try {
        this.loading = true

        await this.$store.dispatch('auth/logout')

        this.$router.push({ name: 'login' })
      } catch (e) {
        throw new Error(e)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
