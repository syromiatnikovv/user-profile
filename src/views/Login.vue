<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" no-gutters>
      <v-card class="elevation-3" width="400">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Войти</v-toolbar-title>
        </v-toolbar>

        <v-form>
          <v-card-text>
            <v-text-field
              label="Логин"
              name="login"
              prepend-icon="mdi-account"
              type="text"
              v-model="login"
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

            <v-checkbox v-model="remember" label="Запомнить меня"></v-checkbox>
          </v-card-text>

          <v-card-actions>
            <v-btn block color="primary" type="submit">Войти</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    login: '',
    password: '',
    remember: false,
  }),
}
</script>
