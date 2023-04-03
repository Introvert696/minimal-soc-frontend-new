<template>
  <div class="post-board">
    <div class="post-board-header">
      <div class="post-board-header-user-info flex">
        <img :src="getImage(avatar)" alt="#" width="50" height="50" />
        <div class="post-board-header-user-info-title">
          <p>{{ namelastname }}</p>
          <span>@{{ login }}</span>
        </div>
      </div>
      <div class="post-board-header-user-info-date">
        <p>{{ date }}</p>
        <span
          @click="deletePost()"
          :href="delete_link"
          v-if="this.creater == this.user_id"
          style="cursor: pointer"
          >Удалить</span
        >
      </div>
    </div>
    <div class="post-board-content">
      <p>
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
import globals from "@/globals";
import axios from "axios";
export default {
  name: "post",
  data() {
    return {
      user_id: localStorage.id,
      delete_link: globals.API_URL + `posts/` + this.id,
    };
  },
  props: [
    "id",
    "content",
    "namelastname",
    "login",
    "date",
    "avatar",
    "creater",
  ],
  methods: {
    deletePost() {
      axios
        .delete(this.delete_link, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        })
        .then((response) => {
          console.log(response);
          this.$emit("deleted");
          this.$router.go(0);
        });
    },
    getImage(image) {
      var imagestring = globals.API_URL + "image/" + image;
      return imagestring;
    },
  },
};
</script>
