<template>
  <div>
    <div class="top-bar">
      <h1 
        id="logo" 
        class="top-bar-left">COUNTDOWN</h1>
      <div class="top-bar-right">
        <nuxt-link 
          to="/setting" 
          class="btn-settings">
          <b-icon 
            icon="settings" 
            type="is-white" 
            size="mdi-18px"/>
        </nuxt-link>
      </div>
      <!-- <clock/> -->
    </div>
    <section class="main-content">
      <nuxt />
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
<style lang="scss" scoped>
.top-bar {
  height: 50px;
  line-height: 50px;
  background: #3b298f;
  padding: 0 10px;
  color: white;
  .top-bar-left {
    float: left;
  }
  .top-bar-right {
    align-items: center;
    float: right;
  }
  #logo {
    font-size: 1.4rem;
    font-weight: bold;
  }
}
.main-content {
  height: calc(100vh-56px);
  overflow-y: auto;
}

.btn-settings:hover {
  opacity: 0.8;
}

.v-clock {
  margin: auto;
}
</style>
