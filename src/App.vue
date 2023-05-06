<template>
  <router-view />
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      connection: null,
    };
  },
  connection: {},
};
</script>
