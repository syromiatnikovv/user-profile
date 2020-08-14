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
              :error-messages="emailErrors"
              @blur="$v.email.$touch()"
              required
              autofocus
            ></v-text-field>

            <v-text-field
              label="Пароль"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              v-model="password"
              :error-messages="passwordErrors"
              @blur="$v.password.$touch()"
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
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import errorsLocalization from '@/utils/errorsLocalization'

export default {
  mixins: [validationMixin],

  validations: {
    email: { required, email },
    password: { required },
  },

  data: () => ({
    email: '',
    password: '',

    loading: false,
  }),

  computed: {
    emailErrors() {
      const errors = []

      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Некорректный email!')
      !this.$v.email.required && errors.push('Введите email!')

      return errors
    },

    passwordErrors() {
      const errors = []

      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Введите пароль!')

      return errors
    },
  },

  methods: {
    async login() {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        try {
          this.loading = true

          const user = {
            email: this.email,
            password: this.password,
          }

          await this.$store.dispatch('auth/login', user)

          this.$router.push({ name: 'profile' })
          this.$notification.success('Добро пожаловать!')
        } catch (e) {
          this.$notification.error(errorsLocalization[e.code] || e.message)
        } finally {
          this.loading = false
        }
      }
    },
  },
}
</script>
