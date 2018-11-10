<template>
  <section class="section">
    <CountDown/>
  </section>
</template>

<script>

import CountDown from '@/components/CountDown'

export default {
  name: 'HomePage',
  components: {CountDown},
  data() {
      return {

      }
  }
}
</script>
<style scoped>
  .section {
    text-align: center;
  }
</style>