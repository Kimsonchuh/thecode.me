<template>
  <div>
    <div class="ui inverted vertical footer segment">
      <div class="ui copyright container">
        <div class="ui grid">
          <div class="left aligned ten wide column">
            &copy; 2017 <a href="https://thecode.me" target="_blank">THECODE.ME</a> 保留所有权利
          </div>
          <div class="computer only right aligned six wide column">
            <a href="http://www.miitbeian.gov.cn" target="_blank">粤ICP备15047595号-2</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.copyright.container {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  a {
    color: rgba(255, 255, 255, 0.5);
  }
}
</style>
