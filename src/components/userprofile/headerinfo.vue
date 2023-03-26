<template>
  <div class="user-header-info">
    <img src="@/assets/bg-profile.png" alt="bg-user" />
    <div class="user-link">
      <img :src="avatar" alt="avatar" width="100" height="100" />

      <div class="profile-text">
        <div class="user-info">
          <p>{{ namelastname }}</p>
          <span>@{{ username }}</span>
        </div>
        <div class="profile-nav flex">
          <div class="profile-nav-link">
            <a href="/feed">Написать сообщение</a>
          </div>
          <div class="profile-nav-link">
            <a href="/friend">Добавить в друзья</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "headerinfo",
  props: {
    namelastname: String,
    username: String,
    avatar: String,
    id: Number,
  },
};
</script>
