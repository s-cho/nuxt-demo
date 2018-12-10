<template>
  <div class="setting-pannel">
    <b-tabs class="b-tabs-1">
      <b-tab-item 
        label="基本設定" 
        icon="calendar">
        <b-field label="イベント名">
          <b-input
            v-model="formProps.eventName.text"
            type="text"
            placeholder="イベント名"
            required/>
        </b-field>
        <b-field label="イベント日時">
          <div class="level">
            <b-datepicker
              v-model="date"
              :first-day-of-week="1"
              icon="calendar-today"
              class="level-item"
              editable/>
            <b-timepicker
              v-model="time"
              icon="clock"
              class="level-item"
              editable/>
          </div>
        </b-field>
        <b-field label="表示内容">
          <b-input
            v-model="formProps.eventDetail.text"
            type="textarea"
            placeholder="表示内容"
          />
        </b-field>
      </b-tab-item>
      <b-tab-item 
        label="テーマ設定" 
        icon="brush">
        <div class="level">
          <!-- テーマ設定表 -->
          <table class="table-config-theme">
            <tr><th colspan="2">背景</th></tr>
            <tr>
              <td>背景色</td>
              <td>
                <input
                  v-model="formProps.bgColor"
                  class="color-picker"
                  type="color">
              </td>
            </tr>
            <tr><th colspan="2">イベント名</th></tr>
            <tr>
              <td>文字色</td>
              <td>      
                <input
                  v-model="formProps.eventName.fontColor"
                  class="color-picker"
                  type="color">
              </td>
            </tr>
            <!-- <tr>
                <td>文字サイズ</td>
                <td>      
                  <input
                    v-model="formProps.eventName.fontSize"
                    type="range" >{{formProps.eventName.fontSize}}
                </td>
              </tr> -->
            <tr><th colspan="2">タイマー</th></tr>
            <tr>
              <td>背景色</td>
              <td>      
                <input
                  v-model="formProps.timer.bgColor"
                  class="color-picker"
                  type="color">
              </td>
            </tr>
            <tr>
              <td>文字色</td>
              <td>      
                <input
                  v-model="formProps.timer.fontColor"
                  class="color-picker"
                  type="color">
              </td>
            </tr>
            <!-- <tr>
                <td>文字サイズ</td>
                <td>      
                  <input
                    v-model="formProps.x"
                    type="range">
                </td>
              </tr> -->
            <tr><th colspan="2">表示内容</th></tr>
            <tr>
              <td>文字色</td>
              <td>      
                <input
                  v-model="formProps.eventDetail.fontColor"
                  class="color-picker"
                  type="color">
              </td>
            </tr>
          </table>
        </div>
      </b-tab-item>
    </b-tabs>
    <div class="btn-area">
      <!-- <nuxt-link to="/action"> -->
      <button 
        :disabled="disabled"
        class="button is-link"
        @click="startCount()">カウント開始</button>
      <!-- </nuxt-link> -->
      <a 
        class="button is-link" 
        @click="$parent.openFullscreen()">
        <span class="icon">
          <b-icon
            icon="fullscreen" 
            type="is-white"/>
        </span>
        <span>全画面</span>
      </a>
    </div>
  </div>
</template>

<script>
import Scene from '@/components/Scene'
export default {
  components: { Scene },
  data() {
    return {
      date: new Date(),
      time: new Date(),
      formProps: {
        eventName: {
          text: 'イベント名',
          fontColor: '',
          fontSize: ''
        },
        eventDate: new Date(),
        eventDetail: {
          text: '表示内容',
          fontColor: '',
          fontSize: ''
        },
        timer: {
          bgColor: '',
          fontColor: '',
          fontSize: ''
        },
        bgColor: '#ffffff'
      }
    }
  },
  computed: {
    inputDate() {
      return new Date(
        this.date.toLocaleDateString() + ' ' + this.time.toLocaleTimeString()
      )
    },
    disabled() {
      return this.inputDate <= new Date()
    },
    bgColor() {
      return 'background-color:' + this.formProps.bgColor
    },
    fontColor() {
      return 'color:' + this.formProps.fontColor
    }
  },
  watch: {
    formProps: {
      handler: function(val) {
        this.$store.commit('setEventName', val.eventName)
        this.$store.commit('setEventDetail', val.eventDetail)
        this.$store.commit('setBgColor', val.bgColor)
        this.$store.commit('setTimer', val.timer)
      },
      deep: true
    }
  },
  methods: {
    startCount() {
      this.$store.commit('start')
      this.$store.commit('setStep', 1)
      this.$store.commit('setEventName', this.formProps.eventName)
      this.$store.commit('setEventDate', this.inputDate)
      this.$store.commit('setEventDetail', this.formProps.eventDetail)
      this.$store.commit('setBgColor', this.formProps.bgColor)
    }
  }
}
</script>
<style lang="scss">
.setting-pannel {
  position: relative;
  .b-tabs-1 {
    height: calc(100%-20px);
    .tab-content {
      overflow: auto !important;
    }
  }
  .btn-area {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 10px;
    background: rgba(255, 255, 255, 0.9);
    border-top: 1px solid gainsboro;
  }
}
.color-picker {
  width: 50px;
  height: 25px;
}
.table-config-theme {
  width: 100%;
  padding: 10px;
  // border: 1px solid gainsboro;
  tr {
    border-bottom: 1px solid gainsboro;
    th {
      font-size: 0.9em;
      background: aliceblue;
      padding: 2px 10px;
      color: blue;
    }
    td {
      font-size: 0.8em;
      padding: 2px 20px;
    }
  }
}
</style>
