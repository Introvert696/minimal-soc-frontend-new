<template>
  <div class="user-header-info">
    <img
      src="https://sun9-47.userapi.com/impg/CnjigHEidpPmQ9w5CdVDMahR1vO_SJkaJ5IfOg/-3EMhmE3tMs.jpg?size=720x234&quality=95&sign=430a684bd5a9d51b11fd5389db1fbbe8&type=album"
      alt="bg-user"
    />
    <div class="user-link">
      <img :src="avatar" alt="avatar" width="100" height="100" />

      <div class="profile-text">
        <div class="user-info">
          <p>{{ namelastname }}</p>
          <span>@{{ username }}</span>
        </div>
        <div class="profile-nav flex">
          <div class="profile-nav-link">
            <a href="/feed">Лента</a>
          </div>
          <div class="profile-nav-link">
            <a href="/friend">Друзья</a>
          </div>
          <div class="profile-nav-link">
            <a href="/group">Группы</a>
          </div>
          <div class="profile-nav-link">
            <a href="/setting">Настройки</a>
          </div>
          <div class="profile-nav-link">
            <a href="/exit">Выход</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "userheaderinfo",
  props: {
    avatar: String,
    namelastname: String,
    username: String,
  },
};
</script>
