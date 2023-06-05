<template>
  <div action="#" class="search-group-form flex">
    <input
      type="text"
      placeholder="Введите название группы..."
      v-model="prompt"
    />
    <button @click="search">Найти...</button>
  </div>
  <groupboard
    v-for="group in groups"
    :key="group"
    :title="group.title"
    :avatar="getImage(group.photo)"
    :groupId="group.id"
  />
</template>

<script>
import axios from "axios";
import globals from "@/globals";
import groupboard from "./groupboard.vue";
export default {
  name: "searchgroup",
  data() {
    return {
      prompt: "",
      groups: [],
    };
  },
  components: {
    groupboard,
  },
  methods: {
    search() {
      axios
        .get(globals.API_URL + "getgroup/" + this.prompt)
        .then((resp) => {
          console.log(resp);
          this.groups = resp.data;
        })
        .catch((resp) => {
          console.log(resp);
        });
    },
    getImage(rawlink) {
      return globals.API_URL + "image/" + rawlink;
    },
  },
};
</script>
