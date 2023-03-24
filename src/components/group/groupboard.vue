<template>
  <div class="group-list-board flex">
    <div>
      <img
        src="@/assets/testlogo.jpg"
        alt="group_logo"
        width="50"
        height="50"
        style="border-radius: 40px"
      />
    </div>
    <div class="group-info-list-board">
      <p>Геймстоп</p>
      <span>20 подписчиков</span>
    </div>
    <div class="group-list-board-delete">
      <a href="#">Отписаться</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "groupboard",
};
</script>
