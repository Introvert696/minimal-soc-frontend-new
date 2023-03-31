<template>
  <mainlayout>
    <createpostform />
    <div class="posts">
      <post
        v-for="post in posts"
        :key="post.post"
        :content="post.post.content"
        :namelastname="
          post.post.creator.name + ' ' + post.post.creator.lastname
        "
        :login="post.post.creator.login"
        :date="post.post.created_at"
        :avatar="post.post.creator.user_photo"
      />
    </div>
  </mainlayout>
</template>

<script>
import mainlayout from "./layout/mainlayout.vue";
import createpostform from "../components/profile/createpostform.vue";
import post from "../components/post.vue";
import globals from "@/globals.js";
import axios from "axios";
import router from "@/router";

export default {
  name: "FeedView",
  data() {
    return {
      API_URL: globals.API_URL,
      posts: [],
    };
  },
  components: {
    createpostform,
    post,
    mainlayout,
  },
  methods: {
    grabPost() {
      axios
        .get(globals.API_URL + "posts", {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        })
        .then((response) => {
          this.posts = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.status);
          if (error.response.status == 401) {
            router.push("/login");
          }
        });
    },
  },
  mounted() {
    if (typeof localStorage.token != "undefined") {
      console.log("User Has token, try to grab info");
    } else {
      console.log("Not Loggin, Redirect to login");
    }
    this.grabPost();
  },
};
</script>
