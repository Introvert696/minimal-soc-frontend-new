<template>
  <div class="setting-form">
    <div class="setting-input">
      <label for="name">Имя:</label><br />
      <input type="text" name="name" v-model="input_name" />
    </div>
    <div class="setting-input">
      <label for="login">Логин:</label><br />
      <input type="text" name="login" v-model="input_login" />
    </div>
    <div class="setting-input">
      <label for="latname">Фамилия:</label><br />
      <input type="text" name="latname" v-model="input_lastname" />
    </div>
    <div class="setting-input">
      <label for="name">Дата рождения:</label><br />
      <input type="date" name="name" v-model="input_datecreate" />
    </div>
    <div class="setting-input">
      <label for="password">Пароль:</label><br />
      <input type="password" name="password" v-model="input_password" />
    </div>
    <div class="setting-input">
      <label for="password2">Повторите пароль:</label><br />
      <input type="password" name="password2" />
    </div>
    <div class="setting-btn">
      <input type="file" name="file" id="input_file" @input="setUserPhoto" />
      <label for="input_file" class="setting-img-btn">
        <span>Выбрать изображение</span>
      </label>
    </div>
    <br />

    <div class="setting-btn">
      <input type="file" name="bg" id="bg" @input="setUserBG" />
      <label for="bg" class="setting-img-btn">
        <span>Выбрать фон профиля</span>
      </label>
    </div>
    <br />

    <button @click="updateInfo" class="setting-save-btn">Сохранить</button>
  </div>
</template>
<script>
import axios from "axios";
import globals from "@/globals";
export default {
  name: "inputform",
  data() {
    return {
      input_name: "",
      input_login: "",
      input_lastname: "",
      input_username: "",
      input_password: "",
      input_datecreate: "",
      input_user_photo: {},
      input_bg_photo: {},
    };
  },
  methods: {
    updateInfo() {
      var updateData = new FormData();
      updateData.append("photo_user", this.input_user_photo);
      console.log(localStorage.token);
      axios
        .post(
          globals.API_URL + "users/" + localStorage.id + "?_method=PUT",
          {
            headers: {
              Authorization: `Bearer ${localStorage.token}`,
            },
          },
          updateData
        )
        .then((resp) => {
          console.log(resp);
        })
        .catch((resp) => {
          console.log(resp);
        });
    },
    setUserPhoto(file) {
      this.input_user_photo = file;
    },
    setUserBG(file) {
      this.input_bg_photo = file;
    },
  },
  mounted() {},
};
</script>
