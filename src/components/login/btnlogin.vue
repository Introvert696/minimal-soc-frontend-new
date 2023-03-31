<template>
  <div class="login-btn">
    <input type="submit" class="" value="Войти" @click="login" />
  </div>
</template>

<script>
export default {
  name: "btnlogin",
  methods: {
    login() {
      this.$emit("Login");
    },
  },
};
</script>
