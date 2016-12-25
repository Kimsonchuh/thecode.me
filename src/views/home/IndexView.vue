<template>
  <div>
    <!--
    // 1、报头
    -->
    <div
      class="ui masthead inverted vertical center aligned segment">
      <div class="ui text container">
        <h1 class="ui inverted header">
          {{article_masthead.title}}
        </h1>
        <button class="ui inverted button">立即阅读</button>
      </div>
    </div>
    <!--
    // 2、最新文章
    -->
    <div class="ui articles basic vertical center aligned segment">
      <div class="ui text container">
        <h2 class="ui header">
          最新文章
        </h2>
      </div>
    </div>
    <!--
    // 3、格言
    -->
    <div class="ui motto basic vertical center aligned segment">
      <div class="ui text container">
        <h2 class="ui header">
          格言
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
          关于我
        </h2>
      </div>
    </div>
    <div class="ui divider"></div>
    <!--
    // 6、友情链接
    -->
    <div class="ui links basic vertical center aligned segment">
      <div class="ui text container">
        <h2 class="ui header">
          友情链接
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState({
    article_masthead: state => state.home.article_masthead,
  }),
  mounted() {
    this.$store.dispatch('homeGetData');
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
    line-height: 60px;
  }
  h2.ui.header {
    font-size: 36px;
    line-height: 50px;
  }
}
// 1、报头
.masthead.segment {
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
