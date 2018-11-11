<template>
  <form>
    <b-field label="イベント名">
        <b-input
          type="text"
          v-model="formProps.eventName"
          placeholder="イベント名"
          required>
        </b-input>
    </b-field>
    <b-field label="イベント日時">
      <div class="level">
        <b-datepicker
          v-model="date"
          :first-day-of-week="1"
          class="level-item"
          icon="calendar-today"
          editable>
        </b-datepicker>
        <b-timepicker
          class="level-item"
          icon="clock"
          editable>
        </b-timepicker>
      </div>
    </b-field>         
    <b-field label="イベント詳細">
        <b-input
          type="textarea"
          v-model="formProps.eventDetail"
          placeholder="イベント詳細"
        >
        </b-input>
    </b-field>
    <nuxt-link to="/">
      <button @click="startCount()" class="button is-primary">カウント開始</button>
    </nuxt-link>
  </form>
</template>

<script>
export default {
  // props: {
  //   eventName: {
  //     type:String,
  //     default:'a'
  //   },
  //   eventDate: {
  //     type:Date,
  //     default:new Date()
  //   },
  //   eventDetail: {
  //     type:String,
  //     default:''
  //   }
  // },
  data() {
    return {
      date:new Date(),
      formProps: {
        eventName: '',
        eventDate: this.date,
        eventDetail: ''
      },
    }
  },
  methods: {
    startCount() {
      this.$store.commit('start')
      this.$store.commit('setEventName',this.formProps.eventName)
      this.$store.commit('setEventDate',this.date)
      console.log(this.formProps.eventDate)
      console.log(this.$store.state.formData.eventName)
    }
  }
}
</script>