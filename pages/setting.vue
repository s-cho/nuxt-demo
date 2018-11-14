<template>
  <section class="section">
    <h1 class="title is-3">設定</h1>
    <!-- <b-modal :active.sync="isComponentModalActive" has-modal-card> -->
    <modal-form v-bind="formProps"/>
    <!-- </b-modal> -->
  </section>
</template>
<script>
import ModalForm from '@/components/ModalForm'
export default {
  components: { ModalForm },
  data() {
    return {
      isComponentModalActive: false,
      formProps: {
        eventName: '',
        eventDate: new Date()
      }
    }
  }
}
</script>
