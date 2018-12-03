<template>
  <section class="section">
    <modal-form v-bind="formProps"/>
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
