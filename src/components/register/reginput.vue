<template>
  <div class="input-login">
    <input
      :type="type"
      :name="name"
      :placeholder="placeholder"
      v-model="inputvalue"
      @input="input()"
    />
  </div>
</template>
<script>
export default {
  name: "reginput",
  data() {
    return {
      inputvalue: "",
    };
  },
  props: ["type", "name", "placeholder"],
  methods: {
    input() {
      this.$emit("inputEv", this.inputvalue);
    },
  },
};
</script>
