<template>
  <div class="user-dialog-board">
    <div class="user-dialog-message">
      <p>
        {{ content }}
      </p>
    </div>
    <div class="user-dialog-info">
      <img
        :src="avatar"
        alt="userAve"
        width="60"
        height="60"
        style="border-radius: 100px"
      />
      <p>
        {{ name }} <br />
        {{ lastname }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "todialogcontainer",
  props: {
    content: String,
    avatar: String,
    name: String,
    lastname: String,
  },
};
</script>
