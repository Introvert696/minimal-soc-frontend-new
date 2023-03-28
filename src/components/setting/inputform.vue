<template>
  <form action="#" class="setting-form">
    <div class="setting-input">
      <label for="name">Имя:</label><br />
      <input type="text" name="name" :value="name" />
    </div>
    <div class="setting-input">
      <label for="login">Логин:</label><br />
      <input type="text" name="login" :value="username" />
    </div>
    <div class="setting-input">
      <label for="latname">Фамилия:</label><br />
      <input type="text" name="latname" />
    </div>
    <div class="setting-input">
      <label for="name">Дата рождения:</label><br />
      <input type="date" name="name" :value="datecreate" />
    </div>
    <div class="setting-input">
      <label for="password">Пароль:</label><br />
      <input type="password" name="password" />
    </div>
    <div class="setting-input">
      <label for="password2">Повторите пароль:</label><br />
      <input type="password" name="password2" />
    </div>
    <div class="setting-btn">
      <input type="file" name="file" id="input_file" />
      <label for="input_file" class="setting-img-btn">
        <span>Выбрать изображение</span>
      </label>
    </div>
    <br />

    <div class="setting-btn">
      <input type="file" name="bg" id="bg" />
      <label for="bg" class="setting-img-btn">
        <span>Выбрать фон профиля</span>
      </label>
    </div>
    <br />

    <button type="submit" class="setting-save-btn">Сохранить</button>
  </form>
</template>
<script>
export default {
  name: "inputform",
  props: {
    name: String,
    lastname: String,
    username: String,
    datecreate: Date,
  },
};
</script>
