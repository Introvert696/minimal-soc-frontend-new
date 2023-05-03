<template>
  <div class="group-list-board flex">
    <div>
      <img
        :src="avatar"
        alt="group_logo"
        width="50"
        height="50"
        style="border-radius: 40px"
      />
    </div>
    <div class="group-info-list-board" @click="openGroup">
      <p>{{ title }}</p>
      <!-- <span>{{ membercount }} подписчиков</span> -->
    </div>
    <div class="group-list-board-delete">
      <a href="#" @click="deleteGroup">Отписаться</a>
    </div>
  </div>
</template>
<script>
import router from "@/router";
import axios from "axios";
import globals from "@/globals";

export default {
  name: "groupboard",
  props: {
    avatar: String,
    title: String,
    membercount: Number,
    id: Number,
    groupId: Number,
  },
  methods: {
    openGroup() {
      router.push("/group/" + this.groupId);
    },
    deleteGroup() {
      axios
        .delete(globals.API_URL + "subscribe_to_groups/" + this.id, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        })
        .then((resp) => {
          console.log(resp);
          router.go("/");
        });
    },
  },
};
</script>
