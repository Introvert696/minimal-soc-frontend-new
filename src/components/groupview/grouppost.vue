<template>
  <div class="group-post-board flex">
    <div class="left-side-gr-post">
      <img
        :src="avatar"
        alt="groupAvatar"
        width="50"
        height="50"
        style="border-radius: 50px"
      />
    </div>
    <div class="center-gr-post">
      <div class="title-gr-post flex">
        <div class="gr-info-post">
          <p>{{ title }}</p>
          <span>{{ desk }}</span>
        </div>
        <div class="gr-post-date-create">
          <p>{{ datecreate }}</p>
        </div>
      </div>
      <div class="content-gr-post">
        <p>
          {{ content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "grouppost",
  props: {
    title: String,
    desk: String,
    datecreate: String,
    content: String,
    avatar: String,
  },
};
</script>
