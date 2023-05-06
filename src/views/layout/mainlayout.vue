<template>
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
  },
};
</script>
