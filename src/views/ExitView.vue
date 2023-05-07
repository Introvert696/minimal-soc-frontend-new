<template>
  <h1>Exit</h1>
</template>

<script>
import router from "@/router";
export default {
  name: "ExitView",
  mounted() {
    localStorage.removeItem("token");
    router.push("/login");
  },
};
</script>
