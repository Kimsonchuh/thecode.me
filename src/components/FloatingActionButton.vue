<template>
  <div class="ui vertical icon menu">
    <a class="item" v-on:click="backtop">
      <i class="chevron up icon"></i>
    </a>
  </div>
</template>

<script>
const $ = global.jQuery;

export default {
  name: 'floating-action-button',
  data() {
    return {
    };
  },
  methods: {
    backtop() {
      $('html, body').animate({ scrollTop: 0 }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
.icon.menu {
  bottom: 50px;
  position: fixed;
  right: 10px;
  z-index: 1000;
}
</style>
