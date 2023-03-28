<template>
  <mainlayout>
    <userheaderinfo
      avatar="https://sun9-48.userapi.com/impg/EA-_cLCHenGIKAxnx3wOZMGi25SOGFZiBtWRYQ/4gAIiMOA4Ns.jpg?size=604x453&quality=95&sign=bc5cd94369d09321a3711ee29fe4cf3f&type=album"
      namelastname="Иван Филатов"
      username="introvert696"
    />
    <createpostform />
    <div class="posts">
      <post
        avatar="https://www.meme-arsenal.com/memes/a2c725c61ba1d3aacd43906785171756.jpg"
        content="Hello its my first test"
        namelastname="Kotek Kotekov"
        login="kotekprostoy"
        date="14:23 12.02.2023"
      />
      <post
        avatar="https://www.meme-arsenal.com/memes/a2c725c61ba1d3aacd43906785171756.jpg"
        content="Hello its my first test"
        namelastname="Kotek Kotekov"
        login="kotekprostoy"
        date="14:23 12.02.2023"
      />
      <post
        avatar="https://www.meme-arsenal.com/memes/a2c725c61ba1d3aacd43906785171756.jpg"
        content="Hello its my first test"
        namelastname="Kotek Kotekov"
        login="kotekprostoy"
        date="14:23 12.02.2023"
      />
      <post
        avatar="https://www.meme-arsenal.com/memes/a2c725c61ba1d3aacd43906785171756.jpg"
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
