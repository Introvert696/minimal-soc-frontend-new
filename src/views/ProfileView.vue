<template>
  <mainlayout>
    <userheaderinfo />
    <createpostform />
    <div class="posts">
      <post
        content="Hello its my first test"
        namelastname="Kotek Kotekov"
        login="kotekprostoy"
        date="14:23 12.02.2023"
      />
      <post
        content="Hello its my first test"
        namelastname="Kotek Kotekov"
        login="kotekprostoy"
        date="14:23 12.02.2023"
      />
      <post
        content="Hello its my first test"
        namelastname="Kotek Kotekov"
        login="kotekprostoy"
        date="14:23 12.02.2023"
      />
    </div>
  </mainlayout>
</template>
<script>
import mainlayout from "./layout/mainlayout.vue";
import userheaderinfo from "@/components/profile/userheaderinfo.vue";
import createpostform from "@/components/profile/createpostform.vue";
import post from "@/components/post.vue";

export default {
  name: "ProfileView",
  components: {
    userheaderinfo,
    createpostform,
    post,
    mainlayout,
  },
};
</script>
