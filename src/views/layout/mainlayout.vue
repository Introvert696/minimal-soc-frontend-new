<template>
  <div class="notificator" @click="closeNot">
    <p>Новое сообщение</p>
  </div>

  <div class="main-container">
    <menuboard />
    <div class="main-content">
      <slot> </slot>
    </div>
  </div>
</template>
<script>
import menuboard from "@/components/menuboard.vue";
import globals from "@/globals";
import router from "@/router";
export default {
  name: "mainlayout",
  components: {
    menuboard,
  },
  data() {
    return {
      connection: null,
      a: "dd",
    };
  },
  mounted() {
    let conForm = {
      id: localStorage.id,
      type: "connect",
    };
    globals.wsServer.onmessage = function (ev) {
      console.log(ev);
    };
    globals.wsServer.onopen = function () {
      globals.wsServer.send(JSON.stringify(conForm));
    };

    globals.wsServer.onmessage = (ev) => {
      var resp = JSON.parse(ev.data);
      if (resp.type == "message") {
        this.notification();
      }
    };
    if (typeof localStorage.token != "undefined") {
      console.log("User Has token, try to grab info");
    } else {
      console.log("Not Loggin, Redirect to login");
      router.push("/login");
    }
  },
  methods: {
    notification() {
      let notf = document.getElementsByClassName("notificator")[0];
      notf.style.display = "block";
      this.$emit("message");
    },
    closeNot() {
      let notf = document.getElementsByClassName("notificator")[0];
      notf.style.display = "none";
    },
  },
};
</script>
