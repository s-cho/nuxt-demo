<template>
  <section class="section">
    <Clock/>
  </section>
</template>

<script>
import Clock from '@/components/Clock'
export default {
  name: 'Home',
  components: {Clock},
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