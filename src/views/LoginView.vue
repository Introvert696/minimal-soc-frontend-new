<template>
  <loginform
    class="login-form"
    @inputLogin="setLogin"
    @inputPassword="setPassword"
    @Login="trylogin"
  >
  </loginform>
</template>

<script>
// @ is an alias to /src
import loginform from "@/components/login/loginform.vue";
import axios from "axios";
import globals from "@/globals";
export default {
  name: "Login",
  components: {
    loginform,
  },
  data() {
    return {
      login: "",
      password: "",
    };
  },
  methods: {
    setLogin(input) {
      this.login = input;
    },
    setPassword(input) {
      this.password = input;
    },
    trylogin() {
      if (this.login != "" && this.password != "") {
        axios
          .post(globals.API_URL + "login", {
            email: this.login,
            password: this.password,
          })
          .then((response) => {
            localStorage.token = response.data.access_token;
            this.$router.push("/feed");
          });
      }
    },
  },
};
</script>
