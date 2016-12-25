<template>
  <div class="ui main text container" v-if="entity">
    <h1 class="ui header">{{entity.title}}</h1>
    <div class="ui divider"></div>
    <div class="markdown-body" v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import marked from 'marked';
import { mapState } from 'vuex';

export default {
  computed: mapState({
    entity: state => state.articles.entity,
    compiledMarkdown() {
      return marked(this.entity.content, { sanitize: true });
    },
  }),
  data() {
    return {
    };
  },
  mounted() {
    const id = this.$route.params.slug;
    this.$store.dispatch('articleGetEntity', id);
  },
};
</script>

<style lang="scss" scoped>
</style>
