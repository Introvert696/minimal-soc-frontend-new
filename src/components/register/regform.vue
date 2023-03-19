<template>
  <form action="" class="board">
    <logo />
    <reginput type="text" name="name" placeholder="name" />
    <reginput type="text" name="lastname" placeholder="lastname" />
    <reginput type="date" name="birthday" placeholder="birthday" />
    <reginput type="email" name="email" placeholder="email" />
    <reginput type="password" name="password" placeholder="password" />
    <reginput type="password" name="pass-again" placeholder="password again" />
    <btnregister />
    <loginlink link="http://vk.com" text="maybe login?" />
  </form>
</template>
<script>
import reginput from "@/components/register/reginput.vue";
import logo from "@/components/logo.vue";
import btnregister from "@/components/register/btnregister.vue";
import loginlink from "@/components/register/loginlink.vue";
export default {
  name: "regform",
  components: {
    reginput,
    logo,
    btnregister,
    loginlink,
  },
};
</script>
