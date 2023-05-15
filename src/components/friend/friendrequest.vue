<template>
  <div class="friend-board">
    <img :src="avatar" alt="#" width="50" height="50" />
    <div class="friend-board-text">
      <p @click="goToUser">{{ namelastname }}</p>
      <a href="#">Добавить </a>
      <a href="#">Отклонить</a>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "friendrequest",
  props: {
    namelastname: String,
    avatar: String,
    id: Number,
  },
  methods: {
    goToUser() {
      router.push("/profile/" + this.id);
    },
    accept() {},
    decline() {},
  },
};
</script>
