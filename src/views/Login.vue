<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" no-gutters>
      <v-card class="elevation-3" width="400">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Войти</v-toolbar-title>
        </v-toolbar>

        <v-form @submit.prevent="login">
          <v-card-text>
            <v-text-field
              label="Email"
              name="email"
              prepend-icon="mdi-account"
              type="text"
              v-model="email"
              required
              autofocus
            ></v-text-field>

            <v-text-field
              label="Пароль"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              v-model="password"
              required
            ></v-text-field>
          </v-card-text>

          <v-card-actions>
            <v-btn block color="primary" :loading="loading" type="submit"
              >Войти</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: '',
    loading: false,
  }),

  methods: {
    async login() {
      try {
        this.loading = true

        const user = {
          email: this.email,
          password: this.password,
        }

        await this.$store.dispatch('auth/login', user)

        this.$router.push({ name: 'profile' })
      } catch (e) {
        throw new Error(e)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
