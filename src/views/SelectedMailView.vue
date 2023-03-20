<template>
  <mainlayout>
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
  </mainlayout>
</template>
<script>
import mainlayout from "./layout/mainlayout.vue";
import selectionumailinfo from "@/components/selectionmail/selectionumailinfo.vue";
import fromdialogcontainer from "@/components/selectionmail/fromdialogcontainer.vue";
import todialogcontainer from "@/components/selectionmail/todialogcontainer.vue";
import sendmessageform from "@/components/selectionmail/sendmessageform.vue";
export default {
  name: "SelectedMailView",
  components: {
    selectionumailinfo,
    fromdialogcontainer,
    todialogcontainer,
    sendmessageform,
    mainlayout,
  },
};
</script>
