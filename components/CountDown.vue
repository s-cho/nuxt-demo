<template>
  <div class="count-down">
    <h1>{{this.$store.state.formData.eventName}}</h1>
      <div v-if="this.$store.state.isStart" class="timer">
        <span class="h">{{hours}}</span><span class="m">{{minutes}}</span><span class="s">{{seconds}}</span>
      </div>
  </div>
</template>

<script>
const zeroPadding = (num, digit) => {
    return (Array(digit).join("0") + num).slice(-digit)
}

export default {
  data() {
    return {
      date: new Date(),
    }
  },
  computed: {
    interval() {
      if(this.$store.state.formData.eventDate < this.date) {
        return 0
      }
      return Math.floor((this.$store.state.formData.eventDate - this.date) / 1000 )
    },
    hours() {
      // return this.interval.getHours()
      return Math.floor(this.interval / 60 / 60)
    },
    minutes() {
      // return this.interval.getMinutes()
      return Math.floor(this.interval / 60) % 60
    },
    seconds() {
      // return this.interval.getSeconds()
      return this.interval % 60
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
  },
}
</script>

<style scoped>
  .timer {
    margin: auto;
    width: fit-content;
    font-size: 8rem;
    color: red;
    /* font-weight: bold; */ 
    /* font-family: fantasy; */
    animation-name: kf1;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  
  .h, .m, .s {
    /* background: black;
    display: inline-block;
    width: 200px;
    padding: 5px;
    border:1px solid gainsboro; */
    position: relative;
    color: red;
  }
  .h:after, .m:after{
    content: ":";
    font-size: 0.8em;
    margin: 20px;
  }
  
  @keyframes kf1 {
  0% {
    transform: scale(1);
  }
  10%{
   transform: scale(1.1);
  }
  80% {
   transform: scale(1);
  }
}
</style>

