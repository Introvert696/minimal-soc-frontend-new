<template>
  <div class="create-group-btn">
    <form
      action="#"
      class="window-create-group"
      v-bind:style="{ display: myDisplay }"
    >
      <div class="create-group-input">
        <label for="title">Название:</label> <br />
        <input type="text" placeholder="Введите название..." name="title" />
      </div>
      <div class="create-group-input">
        <label for="desk">Описание:</label> <br />
        <input type="text" placeholder="Введите описание..." name="desk" />
      </div>
      <div class="create-group-input">
        <label for="photo">Ссылка на аватарку:</label> <br />
        <label for="photo">ВЫБРАТЬ</label>
        <input
          type="file"
          hidden
          placeholder="Введите название"
          name="photo"
          id="photo"
          style="text-align: center; width: 100%"
        />
      </div>
      <div class="create-group-sub">
        <button>Создать</button>
      </div>
    </form>
    <button @click="openCloseWindow()">Создать новую группу</button>
  </div>
</template>
<script>
export default {
  name: "creategroupbtn",
  data() {
    return {
      myDisplay: "none",
    };
  },
  methods: {
    openCloseWindow() {
      this.myDisplay = this.myDisplay === "none" ? "block" : "none";
    },
  },
};
</script>
