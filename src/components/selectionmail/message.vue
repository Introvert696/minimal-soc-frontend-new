<template>
  <div class="user-dialog-board">
    <div class="user-dialog-info">
      <p>
        {{ name }} <br />
        {{ lastname }}
      </p>
    </div>
    <div class="user-dialog-message">
      <p>
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "message",
  props: {
    avatar: String,
    name: String,
    lastname: String,
    content: String,
  },
};
</script>
