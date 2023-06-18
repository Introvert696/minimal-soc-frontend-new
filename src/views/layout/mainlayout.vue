<template>
  <div class="notificator" @click="closeNot">
    <p>Новое сообщение {{ namelastname }}</p>
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
import axios from "axios";

export default {
  name: "mainlayout",
  components: {
    menuboard,
  },
  data() {
    return {
      connection: null,
      a: "dd",
      namelastname: "",
    };
  },
  mounted() {
    //получить

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
        this.notification(resp.from);
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
    notification(id) {
      let notf = document.getElementsByClassName("notificator")[0];
      notf.style.display = "block";
      axios
        .get(globals.API_URL + "users/" + id, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        })
        .then((ev) => {
          console.log(ev.data.user.name + " " + ev.data.user.lastname);
          this.namelastname = ev.data.user.name + " " + ev.data.user.lastname;
        });
      this.$emit("message");
    },
    closeNot() {
      let notf = document.getElementsByClassName("notificator")[0];
      notf.style.display = "none";
    },
  },
};
</script>
