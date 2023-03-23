<template>
  <div class="result-doc-box flex">
    <div class="left-result-doc-box">
      <img
        src="@/assets/testlogo.jpg"
        alt="result document logo"
        width="50"
        height="50"
        style="border-radius: 50px"
      />
    </div>
    <div class="center-result-doc-box">
      <div class="doc-title">
        <p>Kotek Kotikov</p>
        <span>@prostokotek</span>
      </div>
      <div class="doc-name flex">
        <img
          src="@/assets/002-google-docs.png"
          alt="document icon"
          width="20"
          height="20"
        />
        <p>document_name.txt</p>
      </div>
    </div>
    <div class="right-result-doc-box">
      <img
        src="@/assets/download.png"
        alt="download icon"
        width="20"
        height="20"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "resultbox",
};
</script>
