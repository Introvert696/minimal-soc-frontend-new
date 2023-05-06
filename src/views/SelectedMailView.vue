<template>
  <mainlayout>
    <selectionumailinfo
      :avatar="getImage(user.user_photo)"
      namelastname="пользователем"
    />
    <div class="dialog-container">
      <div v-for="mes in messages" :key="mes">
        <fromdialogcontainer
          v-if="mes.from == user.id"
          :avatar="getImage(user.user_photo)"
          :name="user.name"
          :lastname="user.lastname"
          :content="mes.content"
        />

        <todialogcontainer
          v-if="mes.from != user.id"
          :avatar="getImage(groupinfo.seconduser.user_photo)"
          :name="groupinfo.seconduser.name"
          :lastname="groupinfo.seconduser.lastname"
          :content="mes.content"
        />
      </div>
    </div>
    <sendmessageform
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
      console.log();
      axios
        .get(globals.API_URL + "messages_groups/" + this.$route.params.id, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        })
        .then((el) => {
          //console.log(el.data.messages);
          this.messages = el.data.messages;
          this.groupinfo = el.data;
        })
        .catch((er) => {
          if (er.response.status == 401) {
            router.push("/login");
          }
        });
    },

    getImage(image) {
      return globals.API_URL + "image/" + image;
    },
  },
  mounted() {
    this.getProfileInfo();
    this.getMessages();
    globals.wsServer.onmessage = function (ev) {
      console.log(JSON.parse(ev.data));
      var resp = JSON.parse(ev.data);
      if (resp.type == "message") {
        //если пришло новое сообщение
        // тут думаю сделать запрос на выборку сообщений заново
        // типо динамически работают
        router.go(0);
      }
    };
  },
};
</script>
