<template>
  <div class="selection-mail-header">
    <div class="selection-mail-header-img">
      <img
        :src="avatar"
        alt="userimg"
        width="30"
        height="30"
        style="border-radius: 50px; margin-top: 10px; margin-left: 30px"
      />
    </div>
    <div class="selection-mail-header-title">
      <p>Диалог с {{ namelastname }}</p>
    </div>
    <div class="selection-mail-header-menu">
      <p>...</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "selectionumailinfo",
  props: {
    avatar: String,
    namelastname: String,
  },
};
</script>
