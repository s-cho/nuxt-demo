<template>
  <form action="">
    <b-tabs class="b-tabs">
      <b-tab-item 
        label="基本情報" 
        icon="edit">
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
              class="level-item"
              icon="calendar-today"
              editable/>
            <b-timepicker
              v-model="time"
              class="level-item"
              icon="clock"
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
        label="テーマ" 
        icon="brush">
          <b-field label="背景">
          <b-input
            type="color"
            v-model="formProps.bgColor"/>
        </b-field>
      </b-tab-item>
    </b-tabs>
    <nuxt-link to="/action">
      <button 
        :disabled="disabled"
        type="submit"
        class="button is-danger" 
        @click="startCount()">カウント開始</button>
    </nuxt-link>
    <nuxt-link to="/">
      <button class="button">キャンセル</button>
    </nuxt-link>
  </form>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      time: new Date(),
      formProps: {
        eventName:
          'Webサイトを作るエンジニアになりたい方の入門講座',
        eventDate: new Date(),
        eventDetail: '開催します！',
        bgColor: '#ff0000'
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
.b-tabs .tab-content {
  overflow: auto !important;
}

</style>
