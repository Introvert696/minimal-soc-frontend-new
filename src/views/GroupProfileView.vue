<template>
  <mainlayout>
    <profileinfo
      :id="groupinfo.id"
      :title="groupinfo.title"
      :desk="groupinfo.desk"
      membercount="2020"
      :avatar="getPhoto(groupinfo.photo)"
      :is_sub="groupinfo.is_sub"
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
  },
  mounted() {
    this.getGroupPosts();
  },
};
</script>
