<template>
  <div class="friend-board">
    <img :src="avatar" alt="#" width="50" height="50" />
    <div class="friend-board-text">
      <p @click="goToUser">{{ namelastname }}</p>
      <a href="#" @click="sendMessage">Написать сообщение</a>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import axios from "axios";
import globals from "@/globals";

export default {
  name: "friendsearchboard",
  props: {
    namelastname: String,
    avatar: String,
    id: Number,
  },
  methods: {
    goToUser() {
      router.push("/profile/" + this.id);
    },
    sendMessage() {
      axios
        .post(
          globals.API_URL + "messages_groups",
          {
            second_user: this.id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.token}`,
            },
          }
        )
        .then((resp) => {
          console.log(resp);
          router.push("/mail/" + resp.data.id);
        })
        .catch((resp) => {
          console.log(resp);
        });
    },
  },
};
</script>
