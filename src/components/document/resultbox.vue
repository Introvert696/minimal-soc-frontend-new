<template>
  <div class="result-doc-box flex">
    <div class="left-result-doc-box">
      <img
        :src="userlogo"
        alt="result document logo"
        width="50"
        height="50"
        style="border-radius: 50px"
      />
    </div>
    <div class="center-result-doc-box">
      <div class="doc-title">
        <p>{{ namelastname }}</p>
        <span>@{{ username }}</span>
      </div>
      <div class="doc-name flex">
        <img
          src="@/assets/002-google-docs.png"
          alt="document icon"
          width="20"
          height="20"
        />
        <p>{{ docname }}</p>
        <img
          src="@/assets/download.png"
          alt="download icon"
          width="20"
          height="20"
          style="margin-left: 20%"
        />
      </div>
    </div>

    <div class="doc-delete">
      <a href="#">Удалить</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "resultbox",
  props: {
    id: Number,
    userlogo: String,
    username: String,
    docname: String,
    namelastname: String,
  },
};
</script>
