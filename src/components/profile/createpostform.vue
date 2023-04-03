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
export default {
  name: "createpostform",
  data() {
    return {
      content: "",
    };
  },
  props: ["action"],
  methods: {
    createPost() {
      axios
        .post(
          globals.API_URL + "posts",
          {
            content: this.content,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          this.$router.go(0);
        })
        .catch((er) => {
          console.log(er);
        });
    },
  },
};
</script>
