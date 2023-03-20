<template>
  <mainlayout>
    <searchdialog />
    <dialogboard />
    <dialogboard />
    <dialogboard />
    <dialogboard />
  </mainlayout>
</template>
<script>
import mainlayout from "./layout/mainlayout.vue";
import searchdialog from "@/components/mail/searchdialog.vue";
import dialogboard from "@/components/mail/dialogboard.vue";
export default {
  name: "MailView",
  components: {
    searchdialog,
    dialogboard,
    mainlayout,
  },
};
</script>
