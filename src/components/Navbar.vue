<template>
  <div class="ui navbar borderless fixed menu">
    <div class="ui container">
      <div class="header item">
        <router-link to="/" style="height: 32px;">
          <img class="logo" src="../assets/ic_logo_dark.png">
        </router-link>
      </div>
      <div class="right menu">
        <div class="vertically borderless item">
          <iframe src="https://ghbtns.com/github-btn.html?user=lijy91&repo=thecode.me&type=star&count=true" frameborder="0" scrolling="0" width="100px" height="20px"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    auth: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
</style>
