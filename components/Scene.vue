<template>
  <div 
    :style="bgColor" 
    class="scene">
    <p 
      v-show="step == 1" 
      class="event-name" 
      :style="eventNameFontColor"
      contentEditable="true">{{ eventName.text }}</p>
    <CountDown v-show="step == 1 || step == 2"/>
    <p 
      v-show="step == 3" 
      class="event-detail"
      :style="eventDetailFontColor"
      contentEditable="true">{{ eventDetail.text }}</p>
    <slot/>
  </div>
</template>

<script>
import CountDown from '@/components/CountDown'
export default {
  components: { CountDown },
  data() {
    return {
    }
  },
  computed: {
    bgColor() {
      return 'background-color: ' + this.$store.state.bgColor
    },
    eventName() {
      return this.$store.state.eventName
    },
    eventNameFontColor() {
      return 'color: ' + this.eventName.fontColor
    },
    eventNameFontSize() {
      return 'font-size: ' + this.eventName.fontSize + 'em'
    },
    eventDetail() {
      return this.$store.state.eventDetail
    },
    eventDetailFontColor() {
      return 'color: ' + this.eventDetail.fontColor
    },
    step() {
      return this.$store.state.step
    }
  }
}
</script>
<style lang='scss' scoped>
.scene {
  width: 100%;
  height: 100%;
  background: white;
  overflow: hidden;
  position: relative;
  .event-name {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    padding: 10px;
    font-size: 2.5vw;
    text-align: center;
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
