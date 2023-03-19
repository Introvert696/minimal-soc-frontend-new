<template>
  <div class="form-link">
    <a :href="link">{{ text }}</a>
  </div>
</template>

<script>
export default {
  name: "downbuttonlink",
  props: ["link", "text"],
};
</script>
