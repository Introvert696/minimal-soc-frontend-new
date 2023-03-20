<template>
  <mainlayout>
    <profileinfo />
    <grouppost />
    <grouppost />
    <grouppost />
  </mainlayout>
</template>

<script>
import mainlayout from "./layout/mainlayout.vue";
import profileinfo from "@/components/groupview/profileinfo.vue";
import grouppost from "@/components/groupview/grouppost.vue";
export default {
  name: "GroupProfileVIew",
  components: {
    mainlayout,
    profileinfo,
    grouppost,
  },
};
</script>
