<template>
  <div class="friend-view-board">
    <menuboard />
    <div class="friend-box">
      <searchuserform />
      <div class="friends-list">
        <friendboard />
        <friendboard />
        <friendboard />
        <friendboard />
        <friendboard />
      </div>
    </div>
  </div>
</template>

<script>
import menuboard from "@/components/menuboard.vue";
import searchuserform from "@/components/friend/searchuserform.vue";
import friendboard from "@/components/friend/friendboard.vue";
export default {
  name: "FriendView",
  components: {
    menuboard,
    searchuserform,
    friendboard,
  },
};
</script>
