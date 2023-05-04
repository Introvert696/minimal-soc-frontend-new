<template>
  <mainlayout>
    <userheaderinfo
      :avatar="userinfo.user_photo"
      :namelastname="userinfo.name + ' ' + userinfo.lastname"
      :username="userinfo.login"
      :bg_image="userinfo.bg_image"
    />
    <titleboard />
    <inputform />
  </mainlayout>
</template>

<script>
import mainlayout from "./layout/mainlayout.vue";
import userheaderinfo from "@/components/profile/userheaderinfo.vue";
import titleboard from "@/components/setting/titleboard.vue";
import inputform from "@/components/setting/inputform.vue";
import axios from "axios";
import globals from "@/globals";
import router from "@/router";
export default {
  name: "SettingView",
  components: {
    mainlayout,
    userheaderinfo,
    titleboard,
    inputform,
  },
  data() {
    return {
      userinfo: {},
    };
  },
  methods: {
    grabUser() {
      axios
        .get(globals.API_URL + "users/" + localStorage.id, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.userinfo = response.data.user;
        })
        .catch(() => {
          router.push("/login");
        });
    },
  },
  mounted() {
    this.grabUser();
  },
};
</script>
