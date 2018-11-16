<template>
  <div>
    <div class="top-bar">
      <h1 id="logo">COUNTDOWN</h1>
      <nuxt-link 
        to="/setting" 
        class="btn-settings">
        <b-icon 
          icon="settings" 
          type="is-dark" 
          size="is-medium"/>
      </nuxt-link>
      <!-- <clock/> -->
    </div>
    <section class="main-content">
      <div class="container">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
<style scoped>
.top-bar {
  width: 100%;
  border-bottom: 1px solid gainsboro;
  background: #f5f5f5;
  padding: 10px;
  overflow: hidden;
}
#logo {
  float: left;
  font-size: 1.4rem;
  font-weight: bold;
}
/* .main-content {
  } */
.btn-settings {
  float: right;
}
.btn-settings:hover {
  opacity: 0.8;
}

.v-clock {
  margin: auto;
}
</style>
