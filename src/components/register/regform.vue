<template>
  <form action="" class="board">
    <logo />
    <reginput type="text" name="name" placeholder="Имя" />
    <reginput type="text" name="lastname" placeholder="Фамилия" />
    <reginput type="date" name="birthday" placeholder="Дата рождения" />
    <reginput type="email" name="email" placeholder="Почта" />
    <div class="input_wrapper">
      <input type="file" name="file" id="input_file" class="input input_file" />
      <label for="input_file" class="input_file-button">
        <span>Выберите файл для аватара</span>
      </label>
    </div>
    <reginput type="password" name="password" placeholder="Пароль" />
    <reginput
      type="password"
      name="pass-again"
      placeholder="Повторите пароль"
    />
    <btnregister />
    <loginlink link="/login" text="Есть аккаунт?" />
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
