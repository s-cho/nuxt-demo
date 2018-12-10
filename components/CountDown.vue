<template>
  <div 
    class="countdown"
  >
    <ul 
      v-show="step == 1" 
      class="level">
      <!-- <li id="days">
          <div class="number">00</div>
          <div class="label">日</div>
        </li> -->
      <li 
        v-show="hours != 0"
        class="hours level-item" >
        <div :style="timerFontColor">{{ hours }}</div>
        <div class="label">時間</div>
      </li>
      <li class="minutes level-item">
        <div :style="timerFontColor">{{ minutes }}</div>
        <div class="label">分</div>
      </li>
      <li class="seconds level-item">
        <div :style="timerFontColor">{{ seconds }}</div>
        <div class="label">秒</div>
      </li>
    </ul>
    <div 
      v-show="step == 2" 
      class="count-nine">
      {{ secondsNomal }}
    </div>
  </div>
</template>

<script>
const zeroPadding = (num, digit) => {
  return (Array(digit).join('0') + num).slice(-digit)
}

export default {
  data() {
    return {
      date: new Date()
    }
  },
  computed: {
    step() {
      return this.$store.state.step
    },
    interval() {
      if (this.$store.state.eventDate < this.date) {
        return 0
      }
      return Math.floor((this.$store.state.eventDate - this.date) / 1000)
    },
    hours() {
      return Math.floor(this.interval / 60 / 60)
    },
    minutes() {
      return zeroPadding(Math.floor(this.interval / 60) % 60, 2)
    },
    seconds() {
      return zeroPadding(this.secondsNomal, 2)
    },
    secondsNomal() {
      return this.interval % 60
    },
    isCountEnd() {
      return this.$store.state.isStart && this.interval == 0
    },
    isCountNine() {
      if (this.interval < 10) {
        this.$store.commit('setStep', 2)
        console.log(this.$store.state.step)
        return true
      }
      return false
      // return this.interval < 10
      // this.interval = 1
    },
    timerFontColor() {
      return 'color: ' + this.$store.state.timer.fontColor
    }
  },
  watch: {
    interval() {
      if (this.interval == 0) {
        this.$store.commit('setStep', 3)
      } else if (this.interval < 10) {
        this.$store.commit('setStep', 2)
      }
    }
  },
  mounted() {
    this.setDate()
    setInterval(() => this.setDate(), 1000)
  },
  methods: {
    setDate() {
      this.date = new Date()
    }
  }
}
</script>

<style lang='scss' scoped>
.countdown {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: fit-content;
  margin: 0 auto;
  font-family: 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
  text-align: center;

  ul {
    padding: 15px 0 20px 0;
    background: rgba(0, 0, 0, 0.1);
    color: #fff;
    overflow: hidden;
    // border: 1px solid #202020;
    border-width: 1px 0;
    li {
      // margin: 0 -3px 0 0;
      padding: 0 30px;
      display: inline-block;
      // width: 25%;
      // border: 1px solid #202020;
      font-size: 72px;
      font-size: 8vw;
      text-align: center;

      .label {
        color: #fff;
        opacity: 0.8;
        font-size: 18px;
        font-size: 1.5vw;
      }
    }
  }

  .count-nine {
    font-size: 150px;
    font-size: 12vw;
    color: yellow;
    text-shadow: yellow 0px 0px 30px;
    animation-name: animation-01;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
}
.event-name {
  position: absolute;
  width: 100%;
  text-align: center;
  padding: 0 6rem;
  font-size: 2.5rem;
  /* top: -2rem;  */
  bottom: 15rem;
}
.time {
  position: relative;
  width: fit-content;
  margin: auto;
}
.time-before {
  position: absolute;
  bottom: 2.5rem;
  left: -120px;
  font-size: 1.5rem;
  color: #e0e0e0;
}

@keyframes animation-01 {
  0% {
    font-size: 1vw;
    opacity: 0;
  }
  50% {
    font-size: 18vw;
    opacity: 1;
  }
  100% {
    font-size: 60vw;
    opacity: 0;
  }
}
</style>
