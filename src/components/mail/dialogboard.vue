<template>
  <div class="dialog-board">
    <img src="@/assets/testlogo.jpg" alt="user photo" width="50" height="50" />
    <div class="text-dialog-board">
      <p>Alexey Rybakov</p>
      <span>Как дела что деаешь?:</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "dialogboard",
  props: ["name", "lastname", "message", "img"],
};
</script>
