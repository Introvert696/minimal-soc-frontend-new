<template>
  <mainlayout>
    <userheaderinfo
      avatar="https://oir.mobi/uploads/posts/2021-04/1619695857_9-oir_mobi-p-glad-valakas-krolik-zhivotnie-krasivo-foto-9.jpg"
      namelastname="Иван Филатов"
      username="introvert696"
    />
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
