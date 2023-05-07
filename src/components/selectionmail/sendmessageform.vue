<template>
  <form action="#" class="send-message-form" @submit.prevent>
    <input v-model="content" type="text" placeholder="Введите сообщение ..." />
    <button @click="sendMessage" type="submit">Отправить</button>
  </form>
</template>
<script>
import axios from "axios";
import globals from "@/globals";
export default {
  name: "sendmessageform",
  props: ["to", "message_group"],
  data() {
    return {
      content: "",
    };
  },
  methods: {
    sendMessage() {
      axios
        .post(
          globals.API_URL + "messages",
          {
            to: this.to,
            message_group: this.message_group,
            content: this.content,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.token}`,
            },
          }
        )
        .then((resp) => {
          console.log(resp);
          //Тестовое сообщение
          let sendMessage = {
            id: localStorage.id,
            type: "message",
            to: this.to,
          };
          globals.wsServer.send(JSON.stringify(sendMessage));
          this.$emit("send");
          //this.$router.go(0);
        });
    },
    wsNotification() {
      //Тестовое сообщение
      let sendMessage = {
        id: localStorage.id,
        type: "message",
        to: this.to,
      };
      globals.wsServer.onopen = function () {
        globals.wsServer.send(JSON.stringify(sendMessage));
      };
    },
  },
};
</script>
