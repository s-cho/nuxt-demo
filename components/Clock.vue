<template>
  <div class="clock">
    <h1>{{year}}年{{month}}月{{day}}日 ({{weekday}}) {{hours}}:{{minutes}}:{{seconds}}</h1>
  </div>
</template>

<script>
const zeroPadding = (num, digit) => {
    return (Array(digit).join("0") + num).slice(-digit)
}
const weekdays = ["日", "月", "火", "水", "木", "金", "土"]

export default {
  data() {
    return {
      date: new Date(),
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
  .clock {
    font-size: 1.5rem;
  }
</style>

