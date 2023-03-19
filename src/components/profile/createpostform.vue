<template>
  <form :action="action" class="create-post-form">
    <input type="text" placeholder="Введите что-то..." />
    <button type="submit">Создать</button>
  </form>
</template>
<script>
export default {
  name: "createpostform",
  props: ["action"],
};
</script>
