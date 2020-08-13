<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" no-gutters>
      <v-card class="elevation-3" width="400">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Регистрация</v-toolbar-title>
        </v-toolbar>

        <v-form @submit.prevent="register">
          <v-card-text>
            <v-text-field
              label="Имя"
              name="name"
              type="text"
              v-model="user.name"
              prepend-icon="mdi-account"
              required
            ></v-text-field>

            <v-text-field
              label="Email"
              name="email"
              type="text"
              v-model="user.email"
              prepend-icon="mdi-at"
              required
            ></v-text-field>

            <v-file-input
              label="Фото"
              accept="image/*"
              v-model="user.photo"
              prepend-icon="mdi-camera"
            ></v-file-input>

            <v-text-field
              label="Пароль"
              name="password"
              type="password"
              v-model="user.password"
              prepend-icon="mdi-lock"
              required
            ></v-text-field>

            <v-text-field
              label="Повторите пароль"
              name="passwordConfirmation"
              type="password"
              v-model="user.passwordConfirmation"
              prepend-icon="mdi-lock"
              required
            ></v-text-field>
          </v-card-text>

          <v-card-actions>
            <v-btn block color="primary" :loading="loading" type="submit">
              Зарегистрироваться
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    user: {
      name: '',
      email: '',
      photo: null,
      password: '',
      passwordConfirmation: '',
    },
    loading: false,
  }),

  methods: {
    async register() {
      try {
        this.loading = true

        await this.$store.dispatch('auth/register', this.user)

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
