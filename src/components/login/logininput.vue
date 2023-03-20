<template>
  <div class="input-login">
    <input :type="type" :name="name" :placeholder="placeholder" />
  </div>
</template>
<script>
export default {
  name: "logininput",
  props: ["name", "placeholder", "type"],
};
</script>
