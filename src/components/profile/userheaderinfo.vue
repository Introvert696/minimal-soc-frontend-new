<template>
  <div class="user-header-info">
    <img src="@/assets/bg-profile.png" alt="bg-user" />
    <div class="user-link">
      <img src="@/assets/testlogo.jpg" alt="avatar" width="100" height="100" />

      <div class="profile-text">
        <div class="user-info">
          <p>Kotek Kotikov</p>
          <span>@prostoykotrek</span>
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
};
</script>
