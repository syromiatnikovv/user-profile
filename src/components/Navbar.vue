<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>
      <v-icon left>mdi-account</v-icon>
      Профиль пользователя
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn text :to="{ name: 'login' }" class="ml-2">Войти</v-btn>
    <v-btn text :to="{ name: 'register' }" class="ml-2">Регистрация</v-btn>
    <v-btn text>
      <v-icon left>mdi-exit-to-app</v-icon>
      Выйти
    </v-btn>
  </v-app-bar>
</template>
