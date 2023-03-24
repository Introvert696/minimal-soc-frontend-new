<template>
  <mainlayout>
    <searchuserform />
    <div class="friends-list">
      <friendboard
        namelastname="Иван Филатов"
        avatar="https://oir.mobi/uploads/posts/2021-04/1619695857_9-oir_mobi-p-glad-valakas-krolik-zhivotnie-krasivo-foto-9.jpg"
      />
      <friendboard
        namelastname="Иван Филатов"
        avatar="https://oir.mobi/uploads/posts/2021-04/1619695857_9-oir_mobi-p-glad-valakas-krolik-zhivotnie-krasivo-foto-9.jpg"
      />
      <friendboard
        namelastname="Иван Филатов"
        avatar="https://oir.mobi/uploads/posts/2021-04/1619695857_9-oir_mobi-p-glad-valakas-krolik-zhivotnie-krasivo-foto-9.jpg"
      />
      <friendboard
        namelastname="Иван Филатов"
        avatar="https://oir.mobi/uploads/posts/2021-04/1619695857_9-oir_mobi-p-glad-valakas-krolik-zhivotnie-krasivo-foto-9.jpg"
      />
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
