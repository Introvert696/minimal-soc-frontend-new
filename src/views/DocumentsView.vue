<template>
  <mainlayout class="flex">
    <searchbar />
    <resultbox />
    <resultbox />
    <resultbox />
  </mainlayout>
</template>

<script>
import mainlayout from "@/views/layout/mainlayout.vue";
import searchbar from "@/components/document/searchbar.vue";
import resultbox from "@/components/document/resultbox.vue";
export default {
  name: "DocumentsView",
  components: {
    mainlayout,
    searchbar,
    resultbox,
  },
};
</script>
