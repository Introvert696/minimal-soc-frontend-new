<template>
  <div class="profilecontent">
    <menuboard />
    <div class="mailview-content">
      <searchdialog />
      <dialogboard />
      <dialogboard />
      <dialogboard />
      <dialogboard />
    </div>
  </div>
</template>
<script>
import menuboard from "../components/menuboard";
import searchdialog from "@/components/mail/searchdialog.vue";
import dialogboard from "@/components/mail/dialogboard.vue";
export default {
  name: "MailView",
  components: {
    menuboard,
    searchdialog,
    dialogboard,
  },
};
</script>
