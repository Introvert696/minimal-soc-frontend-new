<template>
  <mainlayout>
    <profileinfo
      :id="groupinfo.id"
      :title="groupinfo.title"
      :desk="groupinfo.desk"
      membercount="2020"
      :avatar="getPhoto(groupinfo.photo)"
      :is_sub="groupinfo.is_sub"
      v-on:subscribe="subsctibe_to_group"
    />
    <createNewPost v-if="userId == groupinfo.creater" :groupId="groupinfo.id" />

    <grouppost
      v-for="p in posts"
      :key="p"
      :content="p.content"
      :avatar="getPhoto(groupinfo.photo)"
      :title="groupinfo.title"
      :desk="groupinfo.desk"
      :datecreate="p.created_at"
    />
  </mainlayout>
</template>

<script>
import mainlayout from "./layout/mainlayout.vue";
import profileinfo from "@/components/groupview/profileinfo.vue";
import grouppost from "@/components/groupview/grouppost.vue";
import axios from "axios";
import globals from "@/globals";
import createNewPost from "@/components/groupview/createNewPost.vue";
import router from "@/router";
// import router from "@/router";

export default {
  name: "GroupProfileVIew",
  components: {
    mainlayout,
    profileinfo,
    grouppost,
    createNewPost,
  },
  data() {
    return {
      groupinfo: {},
      posts: [],
      userId: localStorage.id,
    };
  },
  methods: {
    getGroupPosts() {
      axios
        .get(globals.API_URL + "groups/" + this.$route.params.id, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        })
        .then((resp) => {
          console.log(localStorage.id);
          this.groupinfo = resp.data;
          this.posts = resp.data.posts;
        });
    },
    getPhoto(raw) {
      return globals.API_URL + "image/" + raw;
    },
    subsctibe_to_group(id) {
      axios
        .post(
          globals.API_URL + "subscribe_to_groups",
          {
            group_id: id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.token}`,
            },
          }
        )
        .then((resp) => {
          console.log(resp);
          console.log(this.id);
          router.go(0);
        })
        .catch((resp) => {
          console.log(resp);
        });
    },
  },
  mounted() {
    this.getGroupPosts();
  },
};
</script>
