import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      // カウントダウン開始有無
      isStart: false,
      // イベント情報
      formData: {
        eventName:'',
        eventDate: new Date()
      }
    }),
    mutations: {
      setEventName(state,inputName) {
        state.formData.eventName = inputName
      },
      setEventDate(state, inputDate) {
        state.formData.eventDate = inputDate
      },
      start(state) {
        state.isStart = true
      },
      stop(state) {
        state.isStart = false
      }


    }
  })
}

export default createStore