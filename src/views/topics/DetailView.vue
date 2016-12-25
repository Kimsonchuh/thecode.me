<template>
  <div>
    <div class="ui jumbotron inverted vertical center aligned segment">
      <div v-if="entity">
        <h1 class="ui inverted header">
          <img class="ui tiny circular image" :src="entity.image_url">
        </h1>
        <h1 class="ui inverted header">
          {{entity.name}}
        </h1>
        <div class="sub header">{{ entity.description }}</div>
      </div>
    </div>
    <div class="ui main container">
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
