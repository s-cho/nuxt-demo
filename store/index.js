import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      // カウントダウン開始有無
      isStart: false,

      // 0: カウント開始前
      // 1: カウント中
      // 2: カウント中（9秒前）
      // 3: カウント終了後
      step: 0,

      // イベント情報
      formData: {
        eventName: '',
        eventDate: new Date(),
        eventDetail: ''
      }
    }),
    mutations: {
      setEventName(state, inputName) {
        state.formData.eventName = inputName
      },
      setEventDate(state, inputDate) {
        state.formData.eventDate = inputDate
      },
      setEventDetail(state, inputDetail) {
        state.formData.eventDetail = inputDetail
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
    }
  })
}

export default createStore
