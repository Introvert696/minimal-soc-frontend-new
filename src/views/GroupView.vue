<template>
  <mainlayout>
    <searchgroup />
    <creategroupbtn />

    <groupboard
      title="Unsual memes comp"
      avatar="https://oir.mobi/uploads/posts/2021-04/1619695857_9-oir_mobi-p-glad-valakas-krolik-zhivotnie-krasivo-foto-9.jpg"
      membercount="24"
    />
    <groupboard
      title="Unsual memes comp"
      avatar="https://oir.mobi/uploads/posts/2021-04/1619695857_9-oir_mobi-p-glad-valakas-krolik-zhivotnie-krasivo-foto-9.jpg"
      membercount="24"
    />
    <groupboard
      title="Unsual memes comp"
      avatar="https://oir.mobi/uploads/posts/2021-04/1619695857_9-oir_mobi-p-glad-valakas-krolik-zhivotnie-krasivo-foto-9.jpg"
      membercount="24"
    />
  </mainlayout>
</template>

<script>
import mainlayout from "./layout/mainlayout.vue";
import searchgroup from "@/components/group/searchgroup.vue";
import groupboard from "@/components/group/groupboard.vue";
import creategroupbtn from "@/components/group/creategroupbtn.vue";
export default {
  name: "GroupView",
  components: {
    mainlayout,
    searchgroup,
    groupboard,
    creategroupbtn,
  },
};
</script>
