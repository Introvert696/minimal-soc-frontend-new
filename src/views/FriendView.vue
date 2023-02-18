<template>
  <div class="friend-view-board">
    <menuboard />
    <div class="friend-box">
      <searchuserform />
      <div class="friends-list"></div>
    </div>
  </div>
</template>

<script>
import menuboard from "@/components/menuboard.vue";
import searchuserform from "@/components/friend/searchuserform.vue";
export default {
  name: "FriendView",
  components: {
    menuboard,
    searchuserform,
  },
};
</script>
