<template>
  <div action="#" class="search-user-form">
    <input type="text" placeholder="Введите имя и фамилию..." v-model="query" />
    <button @click="getResult">Найти...</button>
  </div>
  <friendsearchboard
    v-for="user in resultUser"
    :key="user"
    :id="user.id"
    :namelastname="user.name + ' ' + user.lastname"
    :avatar="getPhotoUrl(user.user_photo)"
  />
</template>
<script>
import axios from "axios";
import globals from "@/globals";
import friendsearchboard from "./friendsearchboard.vue";
export default {
  name: "searchuserform",
  components: {
    friendsearchboard,
  },
  data() {
    return {
      resultUser: [],
      query: "",
    };
  },
  methods: {
    getResult() {
      axios
        .get(globals.API_URL + "getuser/" + this.query)
        .then((resp) => {
          console.log(resp.status);
          this.resultUser = resp.data;
        })
        .catch((resp) => {
          console.log(resp.response.status);
          if (resp.response.status == 404) {
            this.resultUser = [];
          }
        });
    },
    getPhotoUrl(name) {
      return globals.API_URL + "image/" + name;
    },
  },
  mounted() {},
};
</script>
