<template>
  <div>
    <div class="top-bar">
      <nuxt-link to="/setting">
      <a class="btn-settings">
        <b-icon icon="settings" type="is-dark" size="is-medium"/>
      </a>
      </nuxt-link>
      <h1 id="logo">COUNT-DOWN</h1>
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
    return {

    } 
  }
}
</script>
<style scoped>
  .top-bar {
    width: 100%;
    border-bottom: 1px solid gainsboro;
    /* background: rgba(0,0,0,0.1); */
    padding: 10px;
  }
  #logo {
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
    margin:auto;
  }

</style>