<template>
  <div class="input-login test-border">
    <input :type="type" :name="name" :placeholder="placeholder" />
  </div>
</template>
<script>
export default {
  name: "reginput",
  props: ["type", "name", "placeholder"],
};
</script>
