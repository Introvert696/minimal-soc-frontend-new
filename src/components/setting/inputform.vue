<template>
  <form action="#" class="setting-form">
    <div class="setting-input">
      <label for="name">Имя:</label><br />
      <input type="text" name="name" />
    </div>
    <div class="setting-input">
      <label for="login">Логин:</label><br />
      <input type="text" name="login" />
    </div>
    <div class="setting-input">
      <label for="latname">Фамилия:</label><br />
      <input type="text" name="latname" />
    </div>
    <div class="setting-input">
      <label for="name">Дата рождения:</label><br />
      <input type="date" name="name" />
    </div>
    <div class="setting-input">
      <label for="password">Пароль:</label><br />
      <input type="password" name="password" />
    </div>
    <div class="setting-input">
      <label for="password2">Повторите пароль:</label><br />
      <input type="password" name="password2" />
    </div>
    <button class="setting-btn">Изменить аватарку</button> <br />
    <button class="setting-btn">Изменить фон профиля</button>
    <button type="submit" class="setting-save-btn">Сохранить</button>
  </form>
</template>
<script>
export default {
  name: "inputform",
};
</script>
