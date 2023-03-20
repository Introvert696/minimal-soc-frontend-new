<template>
  <mainlayout>
    <searchuserform />
    <div class="friends-list">
      <friendboard />

      <friendboard />
      <friendboard />
      <friendboard />
      <friendboard />
    </div>
  </mainlayout>
</template>

<script>
import mainlayout from "./layout/mainlayout.vue";
import searchuserform from "@/components/friend/searchuserform.vue";
import friendboard from "@/components/friend/friendboard.vue";
export default {
  name: "FriendView",
  components: {
    searchuserform,
    friendboard,
    mainlayout,
  },
};
</script>
