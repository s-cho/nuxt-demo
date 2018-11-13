<template>
  <div class="action">
    <nuxt-link to="/" class="btn-close">
      <b-icon<b-icon icon="close" type="is-light" size="is-medium"/>
    </nuxt-link>
    <CountDown/>
  </div>
</template>

<script>
import CountDown from '@/components/CountDown'
export default {
  layout: 'fullscreen',
  components: {CountDown},
  data() {
      return {

      }
  }
}
</script>
<style scoped>
  .action {
    position: relative;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    background: black;
    width: 100vw;
    height: 100vh;
    color: white;
  }
  .btn-close {
    opacity: 0.1;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .btn-close:hover {
    opacity: 1;
  }
</style>