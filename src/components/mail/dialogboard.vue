<template>
  <div class="dialog-board">
    <img :src="avatar" alt="user photo" width="50" height="50" />
    <div class="text-dialog-board">
      <p>{{ namelastname }}</p>
      <span>{{ message }}</span>
    </div>
    <div class="dialog-board-delete">
      <a href="#">Удалить</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "dialogboard",
  props: ["namelastname", "message", "avatar", "id"],
};
</script>
