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
            <a href="#" @click="sendMessage">Написать сообщение</a>
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
import globals from "@/globals";
import axios from "axios";
import router from "@/router";
export default {
  name: "headerinfo",
  props: {
    namelastname: String,
    username: String,
    avatar: String,
    id: Number,
  },
  methods: {
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
