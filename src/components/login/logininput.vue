<template>
  <div class="input-login">
    <input
      :type="type"
      :name="name"
      :placeholder="placeholder"
      v-model="value"
      @input="inputField"
    />
  </div>
</template>
<script>
export default {
  name: "logininput",
  props: ["name", "placeholder", "type"],
  data() {
    return {
      value: "",
    };
  },
  methods: {
    inputField() {
      this.$emit("inputField", this.value);
    },
  },
};
</script>
