<template>
  <div class="ui vertical labeled icon menu">
    <a class="item">
      <i class="gamepad icon"></i>
    </a>
    <a class="item">
      <i class="video play icon"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'floating-action-button',
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.menu {
  bottom: 70px;
  position: fixed;
  right: 20px;
  z-index: 1000;
}
</style>
