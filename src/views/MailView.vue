<template>
  <mainlayout>
    <searchdialog />
    <dialogboard
      v-for="dialog in dialogs"
      :key="dialog"
      :id="dialog.id"
      :avatar="getImage(dialog.firstuser.user_photo)"
      :namelastname="
        dialog.firstuser.name +
        ' ' +
        dialog.firstuser.lastname +
        ' и  ' +
        dialog.seconduser.name +
        ' ' +
        dialog.seconduser.lastname
      "
      message="Сообщение"
    />
  </mainlayout>
</template>
<script>
import mainlayout from "./layout/mainlayout.vue";
import searchdialog from "@/components/mail/searchdialog.vue";
import dialogboard from "@/components/mail/dialogboard.vue";
import axios from "axios";
import globals from "@/globals";
export default {
  name: "MailView",
  components: {
    searchdialog,
    dialogboard,
    mainlayout,
  },
  data() {
    return {
      dialogs: {},
    };
  },
  methods: {
    getDialogs() {
      axios
        .get(globals.API_URL + "messages_groups", {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        })
        .then((resp) => {
          this.dialogs = resp.data;
        });
    },
    getImage(image) {
      let imageURL = globals.API_URL + "image/" + image;
      return imageURL;
    },
  },
  mounted() {
    this.getDialogs();
  },
};
</script>
