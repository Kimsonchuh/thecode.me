<template>
  <div class="ui main container">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-3">Fluid jumbotron</h1>
        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </div>
    <div class="container">
      topic
      {{ entity }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState({
    entity: state => state.topics.entity,
  }),
  data() {
    return {
    };
  },
  mounted() {
    const id = this.$route.params.slug;
    this.$store.dispatch('topicGetEntity', id);
  },
};
</script>

<style lang="scss" scoped>
.jumbotron {
  background-color: #455A64;
  .display-3, .lead {
    color: #FFFFFF;
  }
}
</style>
