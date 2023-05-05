<template>
  <mainlayout>
    <headerinfo
      namelastname="Иван Филатов"
      username="introvert696"
      avatar="https://www.meme-arsenal.com/memes/642f350f7bca2c3c3d0d079953ed5f12.jpg"
    />

    <post
      avatar="https://www.meme-arsenal.com/memes/642f350f7bca2c3c3d0d079953ed5f12.jpg"
      content="Я пожилой гиббон"
      namelastname="Иван Филатов"
      login="introvert696"
      date="16:43 12.03.2023"
    />
  </mainlayout>
</template>
<script>
import mainlayout from "./layout/mainlayout.vue";
import headerinfo from "@/components/userprofile/headerinfo.vue";
import post from "@/components/post.vue";
export default {
  name: "UserProfileView",
  components: {
    mainlayout,
    headerinfo,
    post,
  },
  methods: {
    getUserInfo() {},
  },
  mounted() {
    this.getUserInfo();
  },
};
</script>
