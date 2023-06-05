<template>
  <mainlayout>
    <searchgroup />
    <!-- <creategroupbtn /> -->

    <groupboard
      v-for="g in groups"
      :key="g.group"
      :title="g.group.title"
      :avatar="getImage(g.group.photo)"
      :id="g.id"
      :groupId="g.group.id"
    />
  </mainlayout>
</template>

<script>
import mainlayout from "./layout/mainlayout.vue";
import searchgroup from "@/components/group/searchgroup.vue";
import groupboard from "@/components/group/groupboard.vue";
// import creategroupbtn from "@/components/group/creategroupbtn.vue";
import axios from "axios";
import globals from "@/globals";
export default {
  name: "GroupView",
  components: {
    mainlayout,
    searchgroup,
    groupboard,
    // creategroupbtn,
  },
  data() {
    return {
      groups: [],
    };
  },
  methods: {
    getSubGroup() {
      axios
        .get(globals.API_URL + "subscribe_to_groups", {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        })
        .then((resp) => {
          this.groups = resp.data;
        });
    },
    getImage(rawlink) {
      return globals.API_URL + "image/" + rawlink;
    },
  },
  mounted() {
    this.getSubGroup();
  },
};
</script>
