<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" no-gutters>
      <v-card class="elevation-3" width="400">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Ваш профиль</v-toolbar-title>
        </v-toolbar>

        <v-card-title class="justify-center">
          <v-avatar class="profile" color="grey" size="184">
            <v-img :src="photoSrc"></v-img>
          </v-avatar>
        </v-card-title>

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
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn block color="primary" type="submit">
            Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: 'Владимир',
    email: 'test@test.ru',
    photoSrc:
      'https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59095205-stock-illustration-businessman-profile-icon.jpg',
  }),
}
</script>
