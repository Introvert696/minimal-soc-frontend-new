<template>
  <div class="user-header-info">
    <img :src="getImage(bg_image)" alt="bg-user" />
    <div class="user-link">
      <img :src="getImage(avatar)" alt="avatar" width="100" height="100" />

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
import globals from "@/globals";
export default {
  name: "userheaderinfo",
  props: {
    avatar: String,
    namelastname: String,
    username: String,
    bg_image: String,
  },
  methods: {
    getImage(image) {
      var imagestring = globals.API_URL + "image/" + image;
      return imagestring;
    },
  },
};
</script>
