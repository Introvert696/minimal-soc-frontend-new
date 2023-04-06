<template>
  <div class="dialog-board" @click="goToDialog">
    <img :src="avatar" alt="user photo" width="50" height="50" />
    <div class="text-dialog-board">
      <p>{{ namelastname }}</p>
      <span>{{ message }}</span>
    </div>
    <div class="dialog-board-delete">
      <a :href="id">Удалить</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "dialogboard",
  props: ["namelastname", "message", "avatar", "id"],
  methods: {
    goToDialog() {
      this.$router.push("mail/" + this.id);
    },
  },
};
</script>
