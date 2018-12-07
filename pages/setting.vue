<template>
  <div class="level">
    <div class="level-item">
      <scene/>
    </div>
    <div class="level-right">
      <modal-form 
        v-bind="formProps" 
        class="modal-form"/>
    </div>
  </div>
</template>
<script>
import ModalForm from '@/components/ModalForm'
import Scene from '@/components/Scene'
export default {
  components: { ModalForm, Scene },
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
<style lang="scss" scoped>
.level {
  background: gray;
}
.level-item {
  background: gainsboro;
  height: calc(100vh - 50px);
}

.level-right {
  height: calc(100vh - 50px);
  width: 35%;
  background: red;
}
.modal-form {
  width: 100%;
  height: calc(100vh - 50px);
  background: #f9f9f9;
  border-left: 1px solid #bbbbbb;
}
.scene {
  border: 1px solid gray;
  transform: scale(0.8);
}
</style>
