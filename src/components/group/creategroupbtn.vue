<template>
  <div class="create-group-btn">
    <form
      action="#"
      class="window-create-group"
      v-bind:style="{ display: myDisplay }"
      @submit.prevent
    >
      <div class="create-group-input">
        <label for="title">Название:</label> <br />
        <input
          type="text"
          placeholder="Введите название..."
          name="title"
          v-model="title"
        />
      </div>
      <div class="create-group-input">
        <label for="desk">Описание:</label> <br />
        <input
          type="text"
          placeholder="Введите описание..."
          name="desk"
          v-model="desk"
        />
      </div>
      <div class="create-group-input">
        <label for="photo">Выберете фото на аватарку:</label> <br />
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
        <button @click="createNewGroup">Создать</button>
      </div>
    </form>
    <button @click="openCloseWindow()">Создать новую группу</button>
  </div>
</template>
<script>
import axios from "axios";
import globals from "@/globals";
import router from "@/router";

export default {
  name: "creategroupbtn",
  data() {
    return {
      myDisplay: "none",
      title: "",
      desk: "",
      photo: {},
    };
  },
  methods: {
    openCloseWindow() {
      this.myDisplay = this.myDisplay === "none" ? "block" : "none";
    },
    createNewGroup() {
      var dataform = new FormData();
      dataform.append("title", this.title);
      dataform.append("desk", this.desk);
      dataform.append("photo", document.getElementById("photo").files[0]);

      axios
        .post(globals.API_URL + "groups", dataform, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        })
        .then((resp) => {
          console.log(resp);
          router.push("/group/" + resp.data.id);
        })
        .catch((resp) => {
          console.log(resp);
        });
    },
  },
};
</script>
