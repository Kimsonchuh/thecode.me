<template>
  <div class="ui main container">
    article
    {{ entity }}
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
