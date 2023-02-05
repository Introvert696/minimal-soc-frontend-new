<template>
  <div class="menu-board">
    <logo />
    <div class="menu-links">
      <div class="link">
        <a href="#">Мой профиль</a>
        <img
          src="@/assets/001-user.png"
          alt="user-icon"
          width="15"
          height="15"
        />
      </div>
      <div class="link">
        <a href="#">Лента</a>
        <img
          src="@/assets/004-newspaper.png"
          alt="feed-icon"
          width="15"
          height="15"
        />
      </div>
      <div class="link">
        <a href="#">Сообщения</a>
        <img
          src="@/assets/008-messenger.png"
          alt="message-icon"
          width="15"
          height="15"
        />
      </div>
      <div class="link">
        <a href="#">Друзья</a>
        <img
          src="@/assets/005-friends.png"
          alt="friend-icon"
          width="15"
          height="15"
        />
      </div>
      <div class="link">
        <a href="#">Группы</a>
        <img
          src="@/assets/006-group.png"
          alt="group-icon"
          width="15"
          height="15"
        />
      </div>
      <div class="link">
        <a href="#">Документы</a>
        <img
          src="@/assets/002-google-docs.png"
          alt="document-icon"
          width="15"
          height="15"
        />
      </div>
      <div class="link">
        <a href="#">Настройки</a>
        <img
          src="@/assets/003-settings.png"
          alt="setting-icon"
          width="15"
          height="15"
        />
      </div>
      <div class="link">
        <a href="#">Выход</a>
        <img
          src="@/assets/007-exit.png"
          alt="exit-icon"
          width="15"
          height="15"
        />
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/components/logo.vue";
export default {
  name: "menuboard",
  components: {
    logo,
  },
};
</script>
