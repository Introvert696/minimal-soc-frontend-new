<template>
  <mainlayout>
    <headerinfo
      :namelastname="userinfo.name + ' ' + userinfo.lastname"
      :username="userinfo.login"
      :avatar="getImage(userinfo.user_photo)"
      :bg="getImage(userinfo.bg_image)"
    />

    <post
      v-for="p in this.posts"
      :key="p"
      :avatar="userinfo.user_photo"
      :content="p.content"
      :namelastname="userinfo.name + ' ' + userinfo.lastname"
      :login="userinfo.login"
      :date="p.created_at"
    />
  </mainlayout>
</template>
<script>
import mainlayout from "./layout/mainlayout.vue";
import headerinfo from "@/components/userprofile/headerinfo.vue";
import post from "@/components/post.vue";
import axios from "axios";
import globals from "@/globals";
import router from "@/router";
export default {
  name: "UserProfileView",
  components: {
    mainlayout,
    headerinfo,
    post,
  },
  data() {
    return {
      userinfo: [],
      posts: [],
    };
  },
  methods: {
    getUserInfo() {
      axios
        .get(globals.API_URL + "users/" + this.$route.params.id, {
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
    getImage(d) {
      return globals.getPhotoUrl(d);
    },
  },
  mounted() {
    this.getUserInfo();
  },
};
</script>
