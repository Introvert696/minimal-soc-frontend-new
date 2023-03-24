<template>
  <mainlayout>
    <userheaderinfo />
    <titleboard />
    <inputform />
  </mainlayout>
</template>

<script>
import mainlayout from "./layout/mainlayout.vue";
import userheaderinfo from "@/components/profile/userheaderinfo.vue";
import titleboard from "@/components/setting/titleboard.vue";
import inputform from "@/components/setting/inputform.vue";
export default {
  name: "SettingView",
  components: {
    mainlayout,
    userheaderinfo,
    titleboard,
    inputform,
  },
};
</script>
