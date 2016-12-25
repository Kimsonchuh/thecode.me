<template>
  <div>
    <!--
    // 1、报头
    -->
    <div
      class="ui masthead inverted vertical center aligned segment">
      <div class="ui container">
        <h1 class="ui inverted header">
          {{article_masthead.title}}
        </h1>
        <router-link
          :to="{ name: 'article_detail', params: { slug: article_masthead.id }}"
          class="ui inverted button">立即阅读
        </router-link>
      </div>
    </div>
    <!--
    // 2、最新文章
    -->
    <div class="ui articles basic vertical center aligned segment">
      <div class="ui container">
        <h2 class="ui header">
          最新文章
        </h2>
      </div>
    </div>
    <!--
    // 3、格言
    -->
    <div class="ui motto basic vertical left aligned segment">
      <div class="ui text container">
        <p class="quote__text">
          {{article_motto.title}}
        </p>
        <p class="quote__byline">
          <span>{{article_motto.short_id}}</span>
        </p>
      </div>
    </div>
    <!--
    // 4、精选集
    -->
    <div class="ui collections inverted vertical center aligned segment">
      <div class="ui container">
        <h2 class="ui inverted header">
          精选集
        </h2>
      </div>
    </div>
    <!--
    // 5、关于
    -->
    <div class="ui about basic vertical center aligned segment">
      <div class="ui container">
        <h2 class="ui header">
          关于我
        </h2>
      </div>
    </div>
    <!--
    // 6、友情链接
    -->
    <div  v-if="article_links.length > 0">
      <div class="ui divider"></div>
      <div class="ui links basic vertical center aligned segment">
        <div class="ui container">
          <h2 class="ui header">
            友情链接
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState({
    article_masthead: state => state.home.article_masthead,
    article_motto: state => state.home.article_motto,
    article_links: state => state.home.article_links,
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
  .quote__text {
    position: relative;
    font-size: 28px;
    line-height: 1.4;
  }
  .quote__text:before {
    content: "\300C";
    left: -0.8em;
  }
  .quote__text:after {
    content: "\300D";
  }
  .quote__byline {
    font-size: 0.12px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .quote__byline span:first-child:before {
    content: "";
    display: inline-block;
    width: 30px;
    height: 1px;
    margin-right: .5em;
    vertical-align: middle;
    background: #bbb;
  }
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
