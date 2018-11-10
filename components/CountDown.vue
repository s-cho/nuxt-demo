<template>
  <div class="count-down">
    <!-- {{this.$store.state.formData.eventDate}} -->
      <div class="timer">20:43</div>
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
      // eventDate: this.$store.state.formData.eventDate,
    }
  },
  computed: {
    year() {
      return this.date.getFullYear()
    },
    month() {
      return zeroPadding(this.date.getMonth() + 1, 2)
    },
    day() {
      return zeroPadding(this.date.getDate())
    },
    weekday() {
      return weekdays[this.date.getDay()]
    },
    hours() {
      return zeroPadding(this.date.getHours(), 2)
    },
    minutes() {
      return zeroPadding(this.date.getMinutes(), 2)
    },
    seconds() {
      return zeroPadding(this.date.getSeconds(), 2)
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
    font-family: fantasy;
    animation-name: kf1;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  /* .count-down {

  } */
  @keyframes kf1 {
  0% {
    transform: scale3d(1, 1, 1);
  }
  20%{
   transform: scale3d(1.1, 1.1, 1.1);
  }
  100% {
   transform: scale3d(1, 1, 1);
  }
}
</style>

