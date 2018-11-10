<template>
  <div>
    <div class="top-bar">
      <a class="btn-settings" @click="isComponentModalActive = true">
        <b-icon icon="settings" type="is-dark" size="is-medium"/>
      </a>
      <Clock/>
    </div>
    <section class="main-content">
      <div class="container">
        <nuxt />
        <b-modal :active.sync="isComponentModalActive" has-modal-card>
            <modal-form v-bind="formProps"></modal-form>
        </b-modal>
      </div>
    </section>
  </div>
</template>

<script>
import Clock from '@/components/Clock'
import ModalForm from '@/components/ModalForm'

export default {
  components: {Clock, ModalForm},
  data() {
    return {
      isComponentModalActive: false,
      // formProps: {
      //   eventName: '',
      //   eventDate: new Date()
      // }
    }
  }
}
</script>
<style scoped>
  .top-bar {
    width: 100%;
    background: rgba(0,0,0,0.1);
    padding: 10px;
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