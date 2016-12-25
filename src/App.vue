<template>
  <router-view></router-view>
</template>

<script>
import 'nprogress/nprogress.css';
import 'toastr/build/toastr.css';

export default {
};
</script>

<style lang="scss">
#wrapper {
  .ui.container {
    width: 1000px;
  }
  .main.container {
    padding-top: 100px;
    padding-bottom: 2em;
  }
  .navbar.menu {
    height: 100px;
    .item img.logo {
      width: auto;
      height: 50px;
    }
  }
}
</style>
