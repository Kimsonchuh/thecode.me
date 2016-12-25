<template>
  <div class="ui main container">
    <div class="ui text container" v-if="entity">
      <div v-html="entity.content"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState({
    entity: state => state.articles.entity,
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
