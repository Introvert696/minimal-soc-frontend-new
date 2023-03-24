<template>
  <div class="post-board">
    <div class="post-board-header">
      <div class="post-board-header-user-info flex">
        <img :src="avatar" alt="#" width="50" height="50" />
        <div class="post-board-header-user-info-title">
          <p>{{ namelastname }}</p>
          <span>@{{ login }}</span>
        </div>
      </div>
      <div class="post-board-header-user-info-date">
        <p>{{ date }}</p>
        <a href="#">Удалить</a>
      </div>
    </div>
    <div class="post-board-content">
      <p>
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "post",
  props: ["content", "namelastname", "login", "date", "avatar"],
};
</script>
