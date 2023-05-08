<template>
  <mainlayout @message="newMessage">
    <selectionumailinfo
      :avatar="getImage(user.user_photo)"
      namelastname="пользователем"
    />
    <div class="dialog-container">
      <div v-for="mes in messages" :key="mes">
        <fromdialogcontainer
          v-if="groupinfo.firstuser.id == mes.from"
          :avatar="getImage(groupinfo.firstuser.user_photo)"
          :name="groupinfo.firstuser.name"
          :lastname="groupinfo.firstuser.lastname"
          :content="mes.content"
        />

        <todialogcontainer
          v-if="groupinfo.firstuser.id != mes.from"
          :avatar="getImage(groupinfo.seconduser.user_photo)"
          :name="groupinfo.seconduser.name"
          :lastname="groupinfo.seconduser.lastname"
          :content="mes.content"
        />
      </div>
    </div>
    <sendmessageform
      @send="getMessages"
      :to="
        groupinfo.first_user == user.id
          ? groupinfo.second_user
          : groupinfo.first_user
      "
      :message_group="groupinfo.id"
    />
  </mainlayout>
</template>
<script>
import mainlayout from "./layout/mainlayout.vue";
import selectionumailinfo from "@/components/selectionmail/selectionumailinfo.vue";
import fromdialogcontainer from "@/components/selectionmail/fromdialogcontainer.vue";
import todialogcontainer from "@/components/selectionmail/todialogcontainer.vue";
import sendmessageform from "@/components/selectionmail/sendmessageform.vue";
import axios from "axios";
import globals from "@/globals";
import router from "@/router";
export default {
  name: "SelectedMailView",
  components: {
    selectionumailinfo,
    fromdialogcontainer,
    todialogcontainer,
    sendmessageform,
    mainlayout,
  },
  data() {
    return {
      user: {},
      second_user: {},
      messages: [],
      groupinfo: {},
    };
  },
  watch: {
    messages() {
      this.scrollToDown();
    },
  },
  methods: {
    getProfileInfo() {
      axios
        .get(globals.API_URL + "userprofile", {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        })
        .then((resp) => {
          //console.log(resp.data);
          this.user = resp.data;
        })
        .catch((er) => {
          // router.push("/login");
          console.log(er);
        });
    },
    getMessages() {
      console.log("Parse message");
      axios
        .get(globals.API_URL + "messages_groups/" + this.$route.params.id, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        })
        .then((el) => {
          console.log(el.data.messages);
          this.messages = el.data.messages;
          this.groupinfo = el.data;
          console.log(this.groupinfo);
        })
        .catch((er) => {
          if (er.response.status == 401) {
            router.push("/login");
          }
        });
      this.scrollToDown();
    },

    getImage(image) {
      return globals.API_URL + "image/" + image;
    },
    newMessage() {
      this.getMessages();
    },
    scrollToDown() {
      setTimeout(() => {
        var messages = document.getElementsByClassName("dialog-container")[0];
        //console.log(messages);
        messages.scrollTop = 99999999;
      }, 1000);
    },
  },
  mounted() {
    this.getProfileInfo();
    this.getMessages();
  },
};
</script>
