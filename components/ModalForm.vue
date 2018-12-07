<template>
  <div class="setting-pannel">
    <b-tabs class="b-tabs-1">
      <b-tab-item 
        label="基本設定" 
        icon="calendar">
        <b-field label="イベント名">
          <b-input
            v-model="formProps.eventName"
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
            v-model="formProps.eventDetail"
            type="textarea"
            placeholder="表示内容"
          />
        </b-field>
      </b-tab-item>
      <b-tab-item 
        label="テーマ設定" 
        icon="brush">
        <div class="level">
          <div class="level-left">
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
                    v-model="formProps.fontColor"
                    class="color-picker"
                    type="color">
                </td>
              </tr>
              <tr>
                <td>文字サイズ</td>
                <td>      
                  <input
                    v-model="formProps.bgColor"
                    type="range">
                </td>
              </tr>
              <tr><th colspan="2">タイマー</th></tr>
              <tr>
                <td>背景色</td>
                <td>      
                  <input
                    v-model="formProps.bgColor"
                    class="color-picker"
                    type="color">
                </td>
              </tr>
              <tr>
                <td>文字色</td>
                <td>      
                  <input
                    v-model="formProps.fontColor"
                    class="color-picker"
                    type="color">
                </td>
              </tr>
              <tr>
                <td>文字サイズ</td>
                <td>      
                  <input
                    v-model="formProps.x"
                    type="range">
                </td>
              </tr>
            </table>
          </div>
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
      <nuxt-link to="/">
        <button class="button">キャンセル</button>
      </nuxt-link>
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
        eventName: 'Webサイトを作るエンジニアになりたい方の入門講座',
        eventDate: new Date(),
        eventDetail: '開催します！',
        bgColor: '#ff0000',
        fontColor: 'white'
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
  methods: {
    startCount() {
      this.$store.commit('start')
      this.$store.commit('setStep', 1)
      console.log(this.$store.state.step)
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
    height:calc(100%-20px);
    // background: red;
    .tab-content {
      overflow: auto !important;
      // background: yellow;
    }
  }
  .btn-area {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 10px;
    background: rgba(255,255,255,0.9);
    border-top: 1px solid gainsboro;
  }
}
.color-picker {
  width: 50px;
  height: 25px;
}
.table-config-theme {
  padding: 10px;
  border: 1px solid gainsboro;
  tr {
    border-bottom: 1px solid gainsboro;
    th {
      font-size: 0.9em;
      text-align: center;
      background: gainsboro;
    }
    td {
      font-size: 0.8em;
      padding: 2px 10px;
    }
  }
}
</style>
