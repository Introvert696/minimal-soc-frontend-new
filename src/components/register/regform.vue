<template>
  <form :action="this.register_url" class="board" method="POST" @submit.prevent>
    <logo />
    <reginput type="text" name="name" placeholder="Имя" @inputEv="setName" />
    <reginput
      type="text"
      name="lastname"
      placeholder="Фамилия"
      @inputEv="setLastname"
    />
    <reginput
      type="date"
      name="birthday"
      placeholder="Дата рождения"
      @inputEv="setBirthday"
    />
    <reginput
      type="email"
      name="email"
      placeholder="Почта"
      @inputEv="setEmail"
    />
    <reginput
      type="text"
      name="login"
      placeholder="Логин"
      @inputEv="setLogin"
    />
    <div class="input_wrapper">
      <input
        type="file"
        name="user_photo"
        id="input_file"
        class="input input_file"
        v-on:change="setUser_photo"
      />
      <label for="input_file" class="input_file-button">
        <span>Выберите файл для аватара</span>
      </label>
    </div>
    <div class="input_wrapper">
      <input
        type="file"
        name="bg_image"
        id="bg_image"
        class="input input_file"
        v-on:change="setBg"
      />
      <label for="bg_image" class="input_file-button">
        <span>Выберите файл для обложки</span>
      </label>
    </div>
    <reginput
      type="password"
      name="password"
      placeholder="Пароль"
      @inputEv="setPassword"
    />
    <reginput
      type="password"
      name="password_confirmation"
      placeholder="Повторите пароль"
      @inputEv="setPasswordAgain"
    />
    <p
      style="
        text-align: center;
        width: 80%;
        margin: auto;
        color: white;
        font-size: 12px;
        margin-top: 15px;
      "
    >
      При нажатии кнопки "Зарегистрироваться" даёте согласие на обработку
      персональных данных, а так же соглашаетесь с политикой конфиденциальности
      сайта
    </p>
    <btnregister @click="register" />
    <loginlink link="/login" text="Есть аккаунт?" />
  </form>
</template>
<script>
import reginput from "@/components/register/reginput.vue";
import logo from "@/components/logo.vue";
import btnregister from "@/components/register/btnregister.vue";
import loginlink from "@/components/register/loginlink.vue";
import globals from "@/globals";
import axios from "axios";
import router from "@/router";
export default {
  name: "regform",
  data() {
    return {
      name: "",
      lastname: "",
      birthday: "",
      login: "",
      email: "",
      user_photo: {},
      bg: {},
      password: "",
      password_confirmation: "",
      register_url: globals.API_URL + "register",
    };
  },
  methods: {
    setLogin(login) {
      this.login = login;
    },
    setName(name) {
      this.name = name;
    },
    setLastname(lastname) {
      this.lastname = lastname;
    },
    setBirthday(birthday) {
      this.birthday = birthday;
      console.log(this.birthday);
    },
    setEmail(email) {
      this.email = email;
    },
    setUser_photo(file) {
      this.user_photo = file;
      console.log(this.user_photo);
    },
    setBg(file) {
      this.bg = file;
      console.log(this.bg);
    },
    setPassword(password) {
      this.password = password;
    },
    setPasswordAgain(password) {
      this.password_confirmation = password;
    },
    register() {
      if (
        this.name == "" &&
        this.lastname == "" &&
        this.birthday == "" &&
        this.login == "" &&
        this.password == "" &&
        this.email == "" &&
        this.photo_user == "" &&
        this.bg == ""
      ) {
        alert("Заполните поля правильно");
      } else {
        var formData = new FormData();
        var photo_user = document.querySelector("#input_file");
        var bg = document.querySelector("#bg_image");
        formData.append("photo_user", photo_user.files[0]);
        formData.append("bg_image", bg.files[0]);
        formData.append("name", this.name);
        formData.append("lastname", this.lastname);
        formData.append("login", this.login);
        formData.append("birthday", this.birthday);
        formData.append("email", this.email);
        formData.append("password", this.password);
        formData.append("password_confirmation", this.password_confirmation);
        axios
          .post(globals.API_URL + "register", formData)
          .then((res) => {
            console.log(res);
            if (res.status == 201) {
              router.push("/login");
            }
          })
          .catch((er) => {
            console.log(er);
          });
      }
    },
  },
  components: {
    reginput,
    logo,
    btnregister,
    loginlink,
  },
};
</script>
