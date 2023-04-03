<template>
  <mainlayout>
    <userheaderinfo
      :avatar="userinfo.user_photo"
      :namelastname="userinfo.name + ' ' + userinfo.lastname"
      :username="userinfo.login"
      :bg_image="userinfo.bg_image"
    />
    <createpostform />
    <div class="posts">
      <post
        v-for="post in posts"
        :key="post"
        :avatar="userinfo.user_photo"
        :content="post.content"
        :namelastname="userinfo.name + ' ' + userinfo.lastname"
        :login="userinfo.login"
        :date="formatDate(post.created_at)"
        :id="post.id"
        :creater="post.creater"
      />
    </div>
  </mainlayout>
</template>
<script>
import mainlayout from "./layout/mainlayout.vue";
import userheaderinfo from "@/components/profile/userheaderinfo.vue";
import createpostform from "@/components/profile/createpostform.vue";
import post from "@/components/post.vue";
import axios from "axios";
import globals from "@/globals";
import router from "@/router";

export default {
  name: "ProfileView",
  components: {
    userheaderinfo,
    createpostform,
    post,
    mainlayout,
  },
  data() {
    return {
      userinfo: {},
      posts: [],
    };
  },
  methods: {
    grapUser() {
      axios
        .get(globals.API_URL + "users/" + localStorage.id, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.userinfo = response.data.user;
          this.posts = response.data.posts;
          this.posts.reverse();
        })
        .catch(() => {
          router.push("/login");
        });
    },
    formatDate(date) {
      const newDate = new Date(date);
      const day = newDate.getDate();
      const month = newDate.getMonth() + 1;
      const year = newDate.getFullYear();
      const hours = newDate.getHours();
      const minutes = newDate.getMinutes();
      const seconds = newDate.getSeconds();
      return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
    },
  },
  mounted() {
    if (typeof localStorage.token != "undefined") {
      console.log("User Has token, try to grab info");
      this.grapUser();
    } else {
      console.log("Not Loggin, Redirect to login");
    }
  },
};
</script>
