<template>
  <form class="create-post-form" @submit.prevent>
    <input
      type="text"
      placeholder="Введите что-то..."
      name="content"
      v-model="content"
    />
    <button @click="createPost">Создать</button>
  </form>
</template>

<script>
import axios from "axios";
import globals from "@/globals";
import router from "@/router";
export default {
  name: "createNewPost",
  data() {
    return {
      content: "",
    };
  },
  props: {
    groupId: String,
  },
  methods: {
    createPost() {
      axios
        .post(
          globals.API_URL + "group_posts",
          {
            title: "none",
            content: this.content,
            creater: this.groupId,
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
  },
};
</script>
