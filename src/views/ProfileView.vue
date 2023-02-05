<template>
  <div class="flex profilecontent">
    <menuboard />
    <userheaderinfo />
  </div>
</template>
<script>
import menuboard from "../components/menuboard.vue";
import userheaderinfo from "@/components/profile/userheaderinfo.vue";
export default {
  name: "ProfileView",
  components: {
    menuboard,
    userheaderinfo,
  },
};
</script>
