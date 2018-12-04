<template>
  <section class="section">
    <!-- <Clock/> -->
    <h2><b>イベント一覧</b></h2>
    <div 
      v-for="event in eventList" 
      :key="event.event_id" 
      class="event-item">
      <span><small>{{ event.started_at }}</small></span><br>
      {{ event.title }}
    </div>
  </section>
</template>

<script>
import Clock from '@/components/Clock'
export default {
  name: 'Home',
  components: { Clock },
  data() {
    return {}
  },
  computed: {
    eventList() {
    return this.$store.state.eventList.data.events
    }
  },
  mounted() {
    this.$store.dispatch('getEventList')
  }
}
</script>
<style lang="scss" scoped>
.event-item {
  border-bottom: 1px solid gainsboro;
  padding: 10px;

  span {
    color: gray;
  }
}
</style>
