import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      eventList: [],
      // イベント情報
      bgColor: '',
      eventName: {
        text: 'イベント名',
        fontColor: '',
        fontSize: 60
      },
      eventDate: new Date(),
      // eventDetail: '表示内容を入力してください',
      eventDetail: {
        text: '表示内容',
        fontColor: '',
        fontSize: null
      },
      timer: {
        bgColor: '',
        fontColor: '',
        fontSize: '',
      },
      countNine: {
        fontColor: '',
        fontSize: '',
      },
      // 0: カウント開始前
      // 1: カウント中
      // 2: カウント中（9秒前）
      // 3: カウント終了後
      step: 1
    }),
    mutations: {
      setEventList(state, list) {
        state.eventList = list
      },
      setEventName(state, inputName) {
        state.eventName = inputName
      },
      setEventDate(state, inputDate) {
        state.eventDate = inputDate
      },
      setEventDetail(state, inputDetail) {
        state.eventDetail = inputDetail
      },
      setBgColor(state, inputBgColor) {
        state.bgColor = inputBgColor
      },
      setTimer(state, inputTimer) {
        state.timer = inputTimer
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
