<template>
  <form class="board login-board">
    <logo />
    <logininput type="text" name="email" placeholder="Почта" />
    <logininput type="password" name="password" placeholder="Пароль" />
    <btnlogin />
    <downbuttonlink text="Нету аккаунта?" link="/register" />
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
};
</script>
