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
              v-model="name"
              :error-messages="nameErrors"
              @blur="$v.name.$touch()"
              prepend-icon="mdi-account"
              required
            ></v-text-field>

            <v-text-field
              label="Email"
              name="email"
              type="text"
              v-model="email"
              :error-messages="emailErrors"
              @blur="$v.email.$touch()"
              prepend-icon="mdi-at"
              required
            ></v-text-field>

            <v-file-input
              label="Фото"
              accept="image/*"
              v-model="photo"
              :error-messages="photoErrors"
              @blur="$v.photo.$touch()"
              prepend-icon="mdi-camera"
            ></v-file-input>

            <v-text-field
              label="Пароль"
              name="password"
              type="password"
              v-model="password"
              :error-messages="passwordErrors"
              @blur="$v.password.$touch()"
              prepend-icon="mdi-lock"
              required
            ></v-text-field>

            <v-text-field
              label="Повторите пароль"
              name="passwordConfirm"
              type="password"
              v-model="passwordConfirm"
              :error-messages="passwordConfirmErrors"
              @blur="$v.passwordConfirm.$touch()"
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
import { validationMixin } from 'vuelidate'
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
import errorsLocalization from '@/utils/errorsLocalization'

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, minLength: minLength(6) },
    email: { required, email },
    photo: { required },
    password: { required, minLength: minLength(6) },
    passwordConfirm: { required, sameAsPassword: sameAs('password') },
  },

  data: () => ({
    name: '',
    email: '',
    photo: null,
    password: '',
    passwordConfirm: '',

    loading: false,
  }),

  computed: {
    nameErrors() {
      const errors = []

      if (!this.$v.name.$dirty) return errors
      !this.$v.name.minLength && errors.push('Введите минимум 6 символов!')
      !this.$v.name.required && errors.push('Введите имя!')

      return errors
    },

    emailErrors() {
      const errors = []

      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Некорректный email!')
      !this.$v.email.required && errors.push('Введите email!')

      return errors
    },

    photoErrors() {
      const errors = []

      if (!this.$v.photo.$dirty) return errors
      !this.$v.photo.required && errors.push('Выберите фото!')

      return errors
    },

    passwordErrors() {
      const errors = []

      if (!this.$v.password.$dirty) return errors
      !this.$v.password.minLength && errors.push('Введите минимум 6 символов!')
      !this.$v.password.required && errors.push('Введите пароль!')

      return errors
    },

    passwordConfirmErrors() {
      const errors = []

      if (!this.$v.passwordConfirm.$dirty) return errors
      !this.$v.passwordConfirm.required && errors.push('Повторите пароль!')
      !this.$v.passwordConfirm.sameAsPassword && errors.push('Не совпадает!')

      return errors
    },
  },

  methods: {
    async register() {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        try {
          this.loading = true

          const user = {
            name: this.name,
            email: this.email,
            photo: this.photo,
            password: this.password,
            passwordConfirm: this.passwordConfirm,
          }

          await this.$store.dispatch('auth/register', user)

          this.$router.push({ name: 'profile' })
          this.$notification.success('Благодарим за регистрацию!')
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
