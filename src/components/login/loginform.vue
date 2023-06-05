<template>
  <form class="board login-board" @submit.prevent>
    <logo />

    <logininput
      type="text"
      name="email"
      placeholder="Почта"
      @inputField="setLogin"
    />
    <logininput
      type="password"
      name="password"
      placeholder="Пароль"
      @inputField="setPassword"
    />
    <btnlogin @Login="login" />
    <downbuttonlink text="Нет аккаунта?" link="/register" />
  </form>
</template>

<script>
import logininput from "@/components/login/logininput.vue";
import logo from "@/components/logo.vue";
import btnlogin from "@/components/login/btnlogin.vue";
import downbuttonlink from "@/components/login/downbuttonlink.vue";

export default {
  name: "loginform",
  components: {
    logininput,
    logo,
    btnlogin,
    downbuttonlink,
  },

  methods: {
    setLogin(inputValue) {
      this.$emit("inputLogin", inputValue);
    },
    setPassword(inputValue) {
      this.$emit("inputPassword", inputValue);
    },
    login() {
      this.$emit("Login");
    },
  },
};
</script>
