<template>
  <section class="section">
    <!-- <Clock/> -->
    <h2><b>イベント一覧</b></h2>
    <div class="event-item" v-for="event in eventList" v-bind:key="event.event_id">
      <datetime><small>{{ event.started_at }}</small></datetime><br>
      {{ event.title}}
    </div>
  </section>
</template>

<script>
import Clock from '@/components/Clock'
export default {
  name: 'Home',
  components: { Clock },
  data() {
    return {
      eventList:this.$store.state.eventList.data.events
    }
  },
  mounted() {
    this.$store.dispatch('getEventList')
  },
}
</script>
<style lang="scss" scoped>
.event-item {
  border-bottom: 1px solid gainsboro;
  padding:10px;

  datetime {
    color:gray;
  }
}
</style>
