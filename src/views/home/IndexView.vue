<template>
  <div>
    <!--
    // 1、大屏幕
    -->
    <div class="ui jumbotron inverted vertical center aligned segment">
      <div class="ui text container">
        <h1 class="ui inverted header">
          N/A
        </h1>
        <button class="ui inverted button">N/A</button>
      </div>
    </div>
    <!--
    // 2、最新文章
    -->
    <div class="ui articles basic vertical center aligned segment">
      <div class="ui text container">
        <h2 class="ui header">
          N/A
        </h2>
      </div>
    </div>
    <!--
    // 3、格言
    -->
    <div class="ui motto basic vertical center aligned segment">
      <div class="ui text container">
        <h2 class="ui header">
          N/A
        </h2>
      </div>
    </div>
    <!--
    // 4、精选集
    -->
    <div class="ui collections inverted vertical center aligned segment">
      <div class="ui text container">
        <h2 class="ui inverted header">
          精选集
        </h2>
      </div>
    </div>
    <!--
    // 5、关于
    -->
    <div class="ui about basic vertical center aligned segment">
      <div class="ui text container">
        <h2 class="ui header">
          关于
        </h2>
      </div>
    </div>
    <!--
    // 6、友情链接
    -->
    <div class="ui links basic vertical center aligned segment">
      <div class="ui text container">
        <h2 class="ui header">
          N/A
        </h2>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
// 全局样式
.segment {
  min-height: 200px;
  padding-top: 64px;
  padding-bottom: 64px;
  h1.ui.header {
    font-size: 48px;
    font-weight: 100;
    line-height: 60px;
    font-style: normal;
  }
  h2.ui.header {
    font-size: 36px;
    font-weight: 100;
    line-height: 50px;
    font-style: normal;
  }
}
// 1、大屏幕
.jumbotron.segment {
  min-height: 320px;
  margin-top: 100px;
  padding-top: 80px;
}
// 2、最新文章
.articles {

}
// 3、格言
.motto.segment {
  background-color: #ebebeb;
}
// 4、精选集
.collections.segment {
  background-color: #464646;
}
// 5、关于
.about.segment {
}
// 6、友情链接
.links.segment {

}
</style>
