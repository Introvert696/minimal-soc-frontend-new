<template>
  <div class="friend-board">
    <img :src="avatar" alt="#" width="50" height="50" />
    <div class="friend-board-text">
      <p>{{ namelastname }}</p>
      <a href="#">Написать сообщение</a>
    </div>
    <div class="friend-board-delete">
      <a href="#">Удалить</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "friendboard",
  props: {
    namelastname: String,
    avatar: String,
    id: Number,
  },
};
</script>
