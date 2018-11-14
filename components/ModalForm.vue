<template>
  <form action="">
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
    <b-field label="イベント詳細">
      <b-input
        v-model="formProps.eventDetail"
        type="textarea"
        placeholder="イベント詳細"
      />
    </b-field>
    <nuxt-link to="/action">
      <button 
        :disabled="disabled"
        type="submit"
        class="button is-danger" 
        @click="startCount()">カウント開始</button>
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
          '【未経験可！】Webサイトを作るエンジニアになりたい方の入門講座',
        eventDate: new Date(),
        eventDetail: '開催します！'
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
      this.$store.commit('setEventName', this.formProps.eventName)
      this.$store.commit('setEventDate', this.inputDate)
      this.$store.commit('setEventDetail', this.formProps.eventDetail)
    }
  }
}
</script>
