<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" no-gutters>
      <v-card class="elevation-3" width="400">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Регистрация</v-toolbar-title>
        </v-toolbar>

        <v-card-text>
          <v-form>
            <v-text-field
              label="Имя"
              name="name"
              type="text"
              v-model="name"
              prepend-icon="mdi-form-textbox"
              required
            ></v-text-field>

            <v-text-field
              label="Email"
              name="email"
              type="text"
              v-model="email"
              prepend-icon="mdi-at"
              required
            ></v-text-field>

            <v-file-input label="Фото" prepend-icon="mdi-camera"></v-file-input>

            <v-text-field
              label="Логин"
              name="login"
              type="text"
              v-model="login"
              prepend-icon="mdi-account"
              required
            ></v-text-field>

            <v-text-field
              label="Пароль"
              name="password"
              type="password"
              v-model="password"
              prepend-icon="mdi-lock"
              required
            ></v-text-field>

            <v-text-field
              label="Повторите пароль"
              name="passwordConfirmation"
              type="password"
              v-model="passwordConfirmation"
              prepend-icon="mdi-lock"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn block color="primary" type="submit">
            Зарегистрироваться
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: '',
    email: '',
    login: '',
    password: '',
    passwordConfirmation: '',
  }),
}
</script>
