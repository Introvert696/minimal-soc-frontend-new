<template>
  <div class="mgAuto selection-mail-board">
    <menuboard />
    <div class="selection-mail-content">
      <selectionumailinfo />
    </div>
  </div>
</template>
<script>
import menuboard from "@/components/menuboard.vue";
import selectionumailinfo from "@/components/selectionmail/selectionumailinfo.vue";
export default {
  name: "SelectedMailView",
  components: {
    menuboard,
    selectionumailinfo,
  },
};
</script>
