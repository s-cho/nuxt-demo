import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      eventList: [],
      // イベント情報
      formData: {
        eventName: '',
        eventDate: new Date(),
        eventDetail: '',
        bgColor: ''
      },
      // 0: カウント開始前
      // 1: カウント中
      // 2: カウント中（9秒前）
      // 3: カウント終了後
      step: 0
    }),
    mutations: {
      setEventList(state, list) {
        state.eventList = list
      },
      setEventName(state, inputName) {
        state.formData.eventName = inputName
      },
      setEventDate(state, inputDate) {
        state.formData.eventDate = inputDate
      },
      setEventDetail(state, inputDetail) {
        state.formData.eventDetail = inputDetail
      },
      setBgColor(state, inputBgColor) {
        state.formData.bgColor = inputBgColor
      },
      start(state) {
        state.isStart = true
      },
      stop(state) {
        state.isStart = false
      },
      setStep(state, step) {
        state.step = step
      }
    },
    actions: {
      async getEventList({ commit }) {
        const res = await axios.get(
          'https://connpass.com/api/v1/event/?series_id=4824'
        )
        commit('setEventList', res)
      }
    }
  })
}

export default createStore
