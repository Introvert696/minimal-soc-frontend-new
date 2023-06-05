<template>
  <div class="friend-board">
    <img :src="avatar" alt="#" width="50" height="50" />
    <div class="friend-board-text">
      <p @click="goToUser">{{ namelastname }}</p>
      <a href="#" @click="accept">Добавить </a>
      <a href="#">Отклонить</a>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import axios from "axios";
import globals from "@/globals";
export default {
  name: "friendrequest",
  props: {
    namelastname: String,
    avatar: String,
    id: Number,
    friendId: Number,
  },
  methods: {
    goToUser() {
      router.push("/profile/" + this.id);
    },
    accept() {
      axios
        .post(
          globals.API_URL + "friends/" + this.friendId + "?_method=PUT",
          {
            friend_status: 1,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.token}`,
            },
          }
        )
        .then(() => {
          router.go(0);
        });
    },
    decline() {},
  },
};
</script>
