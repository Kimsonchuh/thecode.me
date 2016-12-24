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
* {
  font-family: "Benton Sans Light", Arial, "Microsoft YaHei", 微软雅黑, STHeiti, 华文黑体, STSong, 华文宋体, sans-serif !important;
}
html, body {
  font-size: 16px;
  line-height: 1.88;
  font-weight: normal;
  font-style: normal;
  color: #333;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#wrapper {
  .main.container {
    padding-top: 100px;
    padding-bottom: 2em;
  }
  .navbar.menu {
    height: 100px;
    .item img.logo {
      width: auto;
      height: 18px;
      margin: 7px 0;
    }
  }
}
</style>
