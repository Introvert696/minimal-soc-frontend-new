<template>
  <mainlayout>
    <searchgroup />
    <groupboard />
    <groupboard />
    <groupboard />
    <groupboard />
    <groupboard />
  </mainlayout>
</template>

<script>
import mainlayout from "./layout/mainlayout.vue";
import searchgroup from "@/components/group/searchgroup.vue";
import groupboard from "@/components/group/groupboard.vue";
export default {
  name: "GroupView",
  components: {
    mainlayout,
    searchgroup,
    groupboard,
  },
};
</script>
