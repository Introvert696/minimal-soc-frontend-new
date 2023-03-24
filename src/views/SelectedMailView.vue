<template>
  <mainlayout>
    <selectionumailinfo
      avatar="https://oir.mobi/uploads/posts/2021-04/1619695857_9-oir_mobi-p-glad-valakas-krolik-zhivotnie-krasivo-foto-9.jpg"
      namelastname="Иван Филатов"
    />
    <div class="dialog-container">
      <fromdialogcontainer
        avatar="https://www.meme-arsenal.com/memes/a2c725c61ba1d3aacd43906785171756.jpg"
        name="Иван"
        lastname="Филатов"
        content="Привет как дела?"
      />

      <fromdialogcontainer
        avatar="https://www.meme-arsenal.com/memes/a2c725c61ba1d3aacd43906785171756.jpg"
        name="Иван"
        lastname="Филатов"
        content="Чем занимаешься?"
      />

      <todialogcontainer
        avatar="https://www.meme-arsenal.com/memes/a2c725c61ba1d3aacd43906785171756.jpg"
        name="Алена"
        lastname="Киркорова"
        content="Привет, хорошо"
      />
      <todialogcontainer
        avatar="https://www.meme-arsenal.com/memes/a2c725c61ba1d3aacd43906785171756.jpg"
        name="Алена"
        lastname="Киркорова"
        content="у тебя как?"
      />
      <todialogcontainer
        avatar="https://www.meme-arsenal.com/memes/a2c725c61ba1d3aacd43906785171756.jpg"
        name="Алена"
        lastname="Киркорова"
        content="Чем занимаешься?"
      />
    </div>
    <sendmessageform />
  </mainlayout>
</template>
<script>
import mainlayout from "./layout/mainlayout.vue";
import selectionumailinfo from "@/components/selectionmail/selectionumailinfo.vue";
import fromdialogcontainer from "@/components/selectionmail/fromdialogcontainer.vue";
import todialogcontainer from "@/components/selectionmail/todialogcontainer.vue";
import sendmessageform from "@/components/selectionmail/sendmessageform.vue";
export default {
  name: "SelectedMailView",
  components: {
    selectionumailinfo,
    fromdialogcontainer,
    todialogcontainer,
    sendmessageform,
    mainlayout,
  },
};
</script>
