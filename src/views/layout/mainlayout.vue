<template>
  <div class="main-container">
    <menuboard />
    <div class="main-content">
      <slot> </slot>
    </div>
  </div>
</template>
<script>
import menuboard from "@/components/menuboard.vue";
export default {
  name: "mainlayout",
  components: {
    menuboard,
  },
};
</script>
