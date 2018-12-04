<template>
  <div 
    :style="bgColor" 
    class="screen">
    <nuxt-link 
      to="/" 
      class="btn-close">
      <b-icon 
        icon="close" 
        type="is-light" 
        size="is-medium"/>
    </nuxt-link>
    <p 
      v-show="step == 1" 
      class="event-name">{{ this.$store.state.formData.eventName }}</p>
    <CountDown v-show="step == 1 || step == 2"/>
    <p 
      v-show="step == 3" 
      class="event-detail">{{ this.$store.state.formData.eventDetail }}</p>
  </div>
</template>

<script>
import CountDown from '@/components/CountDown'
export default {
  layout: 'fullscreen',
  components: { CountDown },
  data() {
    return {
      bgColor: 'background-color: ' + this.$store.state.formData.bgColor
    }
  },
  computed: {
    step() {
      return this.$store.state.step
    }
  }
}
</script>
<style lang='scss' scoped>
.screen {
  background: #0d0d0d;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  color: white;

  .btn-close {
    opacity: 0.1;
    position: absolute;
    top: 10px;
    right: 10px;

    &:hover {
      opacity: 1;
    }
  }

  .event-name {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    padding: 10px;
    font-size: 2.5vw;
    text-align: center;
    // background: gray;
  }
  .event-detail {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 80%;
    padding: 20px;
    margin: 0 auto;
    text-align: center;
    font-family: 'Arial Narrow', Arial, sans-serif;
    font-size: 4vw;
    white-space: pre-line;
    animation-name: animation-02;
    animation-duration: 2s;
    // animation-iteration-count: infinite;
  }

  @keyframes animation-02 {
    0% {
      transform: translateY(-20%);
      opacity: 0;
    }
    100% {
      transform: translateY(-50%);
      opacity: 1;
    }
  }
}
</style>
