<template>
  <div class="gr-board flex">
    <div class="left-gr-side">
      <img
        :src="avatar"
        alt="gr_photo"
        width="100"
        height="100"
        style="border-radius: 100px"
      />
    </div>
    <div class="right-gr-side">
      <div class="title-gr-board">
        <p>{{ title }}</p>
        <span>{{ desk }}</span>
      </div>
      <div class="link-gr-board flex">
        <a href="#" v-if="is_sub == false" @click="subscribe">Подписаться</a>
        <!-- <p>Подписчики: {{ membercount }}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
// import globals from "@/globals";
// import router from "@/router";
// import axios from "axios";
export default {
  name: "profileinfo",
  props: {
    avatar: String,
    title: String,
    desk: String,
    membercount: String,
    id: String,
    is_sub: Boolean,
  },
  methods: {
    subscribe() {
      this.$emit("subscribe", this.id);
    },
  },
};
</script>
