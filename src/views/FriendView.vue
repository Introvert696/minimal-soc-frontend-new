<template>
  <mainlayout>
    <searchuserform />

    <div class="requests">
      <friendrequest
        v-for="req in this.friend_requests"
        :key="req"
        :id="req.firstuser.id"
        :namelastname="req.firstuser.name + ' ' + req.firstuser.lastname"
        :avatar="getPhotoUrl(req.firstuser.user_photo)"
        :friendId="req.id"
      />
    </div>
    <hr />
    <div class="friends-list">
      <div v-for="fr in friends" :key="fr">
        <friendboard
          v-if="fr.first_user != id"
          :namelastname="fr.firstuser.name + ' ' + fr.firstuser.lastname"
          :avatar="getPhotoUrl(fr.firstuser.user_photo)"
          :id="fr.firstuser.id"
        />
        <friendboard
          v-if="fr.second_user != id"
          :namelastname="fr.seconduser.name + ' ' + fr.seconduser.lastname"
          :avatar="getPhotoUrl(fr.seconduser.user_photo)"
          :id="fr.seconduser.id"
        />
      </div>
    </div>
  </mainlayout>
</template>

<script>
//http://127.0.0.1:8000/api/friends
import mainlayout from "./layout/mainlayout.vue";
import searchuserform from "@/components/friend/searchuserform.vue";
import friendboard from "@/components/friend/friendboard.vue";
import axios from "axios";
import globals from "@/globals";
import friendrequest from "@/components/friend/friendrequest.vue";
export default {
  name: "FriendView",
  components: {
    searchuserform,
    friendboard,
    mainlayout,
    friendrequest,
  },
  data() {
    return {
      friends: [],
      id: 0,
      friend_requests: [],
    };
  },
  methods: {
    getFreinds() {
      axios
        .get(globals.API_URL + "friends", {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        })
        .then((response) => {
          //console.log(response.data);
          //получение друзей
          this.friends = response.data.friend;
          //получение запросов на добавление в друзья
          this.friend_requests = response.data.requests;
        })
        .catch((resp) => {
          console.log(resp);
        });
    },
    getPhotoUrl(name) {
      return globals.API_URL + "image/" + name;
    },
  },
  mounted() {
    this.getFreinds();
    this.id = localStorage.id;
  },
};
</script>
