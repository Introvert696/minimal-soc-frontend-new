<template>
  <mainlayout>
    <createpostform />
    <div class="posts">
      <post
        content="Hello its my first test"
        namelastname="Kotek Kotekov"
        login="kotekprostoy"
        date="14:23 12.02.2023"
        avatar="https://oir.mobi/uploads/posts/2021-04/1619695857_9-oir_mobi-p-glad-valakas-krolik-zhivotnie-krasivo-foto-9.jpg"
      />

      <post
        content="Hello its my first test"
        namelastname="Kotek Kotekov"
        login="kotekprostoy"
        date="14:23 12.02.2023"
        avatar="https://oir.mobi/uploads/posts/2021-04/1619695857_9-oir_mobi-p-glad-valakas-krolik-zhivotnie-krasivo-foto-9.jpg"
      />

      <post
        content="Hello its my first test"
        namelastname="Kotek Kotekov"
        login="kotekprostoy"
        date="14:23 12.02.2023"
        avatar="https://oir.mobi/uploads/posts/2021-04/1619695857_9-oir_mobi-p-glad-valakas-krolik-zhivotnie-krasivo-foto-9.jpg"
      />

      <post
        content="Hello its my first test"
        namelastname="Kotek Kotekov"
        login="kotekprostoy"
        date="14:23 12.02.2023"
        avatar="https://oir.mobi/uploads/posts/2021-04/1619695857_9-oir_mobi-p-glad-valakas-krolik-zhivotnie-krasivo-foto-9.jpg"
      />

      <post
        content="Hello its my first test"
        namelastname="Kotek Kotekov"
        login="kotekprostoy"
        date="14:23 12.02.2023"
        avatar="https://oir.mobi/uploads/posts/2021-04/1619695857_9-oir_mobi-p-glad-valakas-krolik-zhivotnie-krasivo-foto-9.jpg"
      />

      <post
        content="Hello its my first test"
        namelastname="Kotek Kotekov"
        login="kotekprostoy"
        date="14:23 12.02.2023"
        avatar="https://oir.mobi/uploads/posts/2021-04/1619695857_9-oir_mobi-p-glad-valakas-krolik-zhivotnie-krasivo-foto-9.jpg"
      />
    </div>
  </mainlayout>
</template>

<script>
import mainlayout from "./layout/mainlayout.vue";
import createpostform from "../components/profile/createpostform.vue";
import post from "../components/post.vue";

export default {
  name: "FeedView",
  components: {
    createpostform,
    post,
    mainlayout,
  },
};
</script>
