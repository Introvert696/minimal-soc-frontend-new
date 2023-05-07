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
      //console.log(JSON.parse(ev.data));
      var resp = JSON.parse(ev.data);
      if (resp.type == "message") {
        //если пришло новое сообщение
        // тут думаю сделать запрос на выборку сообщений заново
        // типо динамически работают
        //router.go(0);
        this.notification();
      }
    };
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
