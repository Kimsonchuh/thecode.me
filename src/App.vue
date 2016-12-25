<template>
  <router-view></router-view>
</template>

<script>
import 'nprogress/nprogress.css';
import 'toastr/build/toastr.css';
import 'github-markdown-css/github-markdown.css';

export default {
};
</script>

<style lang="scss">
#wrapper {
  .ui.container {
    width: 1000px;
  }
  .main.container {
    margin-top: 100px;
    padding-top: 20px;
    padding-bottom: 20px;
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
