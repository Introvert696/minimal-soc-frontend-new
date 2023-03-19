<template>
  <div class="profilecontent">
    <menuboard />
    <div class="">
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
    </div>
  </div>
</template>
<script>
import menuboard from "../components/menuboard.vue";
import userheaderinfo from "@/components/profile/userheaderinfo.vue";
import createpostform from "@/components/profile/createpostform.vue";
import post from "@/components/post.vue";

export default {
  name: "ProfileView",
  components: {
    menuboard,
    userheaderinfo,
    createpostform,
    post,
  },
};
</script>
