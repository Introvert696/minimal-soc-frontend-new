<template>
  <mainlayout>
    <searchdialog />
    <dialogboard
      avatar="https://www.meme-arsenal.com/memes/a2c725c61ba1d3aacd43906785171756.jpg"
      namelastname="Алексей Пушкин"
      message="Как дела у тебя?"
    />
    <dialogboard
      avatar="https://www.meme-arsenal.com/memes/a2c725c61ba1d3aacd43906785171756.jpg"
      namelastname="Алексей Пушкин"
      message="Как дела у тебя?"
    />
    <dialogboard
      avatar="https://www.meme-arsenal.com/memes/a2c725c61ba1d3aacd43906785171756.jpg"
      namelastname="Алексей Пушкин"
      message="Как дела у тебя?"
    />
    <dialogboard
      avatar="https://www.meme-arsenal.com/memes/a2c725c61ba1d3aacd43906785171756.jpg"
      namelastname="Алексей Пушкин"
      message="Как дела у тебя?"
    />
    <dialogboard
      avatar="https://www.meme-arsenal.com/memes/a2c725c61ba1d3aacd43906785171756.jpg"
      namelastname="Алексей Пушкин"
      message="Как дела у тебя?"
    />
  </mainlayout>
</template>
<script>
import mainlayout from "./layout/mainlayout.vue";
import searchdialog from "@/components/mail/searchdialog.vue";
import dialogboard from "@/components/mail/dialogboard.vue";
export default {
  name: "MailView",
  components: {
    searchdialog,
    dialogboard,
    mainlayout,
  },
};
</script>
