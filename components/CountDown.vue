<template>
  <div>
    <div v-if="this.$store.state.isStart && !isCountEnd">

      <div class="count-down">
        <p class="event-name">
          {{ this.$store.state.formData.eventName }}
        </p>
        <div class="time">
          <span 
            v-show="!isCountNine" 
            class="time-before">開始まで</span><span 
              v-show="hours != 0" 
              class="hh">{{ hours }}</span><span 
                v-show="!isCountNine" 
                class="mm">{{ minutes }}</span><span 
                  v-show="!isCountNine" 
                  class="ss">{{ seconds }}</span>
          <span 
            v-show="isCountNine" 
            class="s">{{ secondsNomal }}</span>
        </div>
      </div>
    </div>
    <div 
      v-if="isCountEnd" 
      class="display-content">
      <p class="event-detail">      
        {{ this.$store.state.formData.eventDetail }}       
      </p>
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
    interval() {
      if (this.$store.state.formData.eventDate < this.date) {
        return 0
      }
      return Math.floor(
        (this.$store.state.formData.eventDate - this.date) / 1000
      )
    },
    hours() {
      return Math.floor(this.interval / 60 / 60)
    },
    minutes() {
      return zeroPadding(Math.floor(this.interval / 60) % 60, 2)
    },
    seconds() {
      return zeroPadding(this.interval % 60, 2)
    },
    secondsNomal() {
      return this.interval % 60
    },
    isCountEnd() {
      return this.$store.state.isStart && this.interval == 0
    },
    isCountNine() {
      return this.interval < 10
    }
  },
  watched: {},
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

<style scoped>
.count-down {
  position: relative;
  font-size: 8rem;
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

.hh,
.mm,
.ss {
  /* background: black;
    display: inline-block;
    width: 200px;
    padding: 5px;
    border:1px solid gainsboro; */
  position: relative;
  /* color: red; */
}
.hh:after,
.mm:after {
  content: ':';
  font-size: 0.8em;
  margin: 20px;
}
.s {
  color: red;
  font-size: 12rem;
  animation-name: kf1;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

.event-detail {
  padding: 2rem;
  font-size: 4rem;
  /* vertical-align: middle; */
}

@keyframes kf1 {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(1.1);
  }
  80% {
    transform: scale(1);
  }
}
</style>
