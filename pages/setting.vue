<template>
  <div class="level">
    <div class="scene-thumbs level-left">
      <ol>
        <li 
          :class="{current: this.$store.state.step == 1}" 
          @click="changeScene(1)">1</li>
        <li 
          :class="{current: this.$store.state.step == 2}" 
          @click="changeScene(2)">2</li>
        <li 
          :class="{current: this.$store.state.step == 3}" 
          @click="changeScene(3)">3</li>
      </ol>
    </div>
    <div class="level-item">
      <scene id="preview"/>
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
  },
  methods: {
    openFullscreen() {
      let elem = document.getElementById('preview')
      if (elem.requestFullscreen) {
        elem.requestFullscreen()
      } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen()
      } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen()
      } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen()
      }
    },
    changeScene(index) {
      this.$store.commit('setStep', index)
    }
  }
}
</script>
<style lang="scss" scoped>
.level {
  background: gainsboro;
}
.level-item {
  background: gainsboro;
  height: calc(100vh - 50px);
}
.level-left {
  height: calc(100vh - 50px);
  width: 10%;
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
  transform: scale(0.9);
  .btn-fullscreen:hover {
    opacity: 0.8;
  }
}

.scene-thumbs {
  padding: 15px;
  text-align: center;
  align-items: start;
  border-right: 1px solid #bbbbbb;
  ol {
    width: 100%;
    li {
      display: block;
      width: 100%;
      height: 50px;
      border: 1px solid #bbb;
      margin-bottom: 15px;
      background: white;
      &:hover {
        cursor: pointer;
        border: 2px solid gray;
      }
    }
    .current {
      border: 2px solid blue;
    }
  }
}
</style>
