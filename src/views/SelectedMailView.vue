<template>
  <div class="mgAuto selection-mail-board">
    <menuboard />
    <div class="selection-mail-content">
      <selectionumailinfo />
      <div class="dialog-container">
        <fromdialogcontainer />
        <fromdialogcontainer />
        <todialogcontainer />
        <todialogcontainer />
        <todialogcontainer />
        <todialogcontainer />
        <todialogcontainer />
      </div>
      <sendmessageform />
    </div>
  </div>
</template>
<script>
import menuboard from "@/components/menuboard.vue";
import selectionumailinfo from "@/components/selectionmail/selectionumailinfo.vue";
import fromdialogcontainer from "@/components/selectionmail/fromdialogcontainer";
import todialogcontainer from "@/components/selectionmail/todialogcontainer.vue";
import sendmessageform from "@/components/selectionmail/sendmessageform.vue";
export default {
  name: "SelectedMailView",
  components: {
    menuboard,
    selectionumailinfo,
    fromdialogcontainer,
    todialogcontainer,
    sendmessageform,
  },
};
</script>
