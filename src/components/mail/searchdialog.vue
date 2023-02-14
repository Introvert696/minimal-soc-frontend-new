<template>
  <form :action="action" class="create-post-form search-dialog-form">
    <input type="text" placeholder="Введите что-то..." />
    <button type="submit">Найти</button>
  </form>
</template>

<script>
export default {
  name: "searchdialog",
  props: ["action"],
};
</script>
