<template>
  <form action="">
    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">設定</p>
        </header>
        <section class="modal-card-body">
            <b-field label="イベント名">
                <b-input
                  type="text"
                  :value="eventName"
                  placeholder="イベント名"
                  required>
                </b-input>
            </b-field>
            <b-field label="イベント開始時刻">
                <b-datepicker v-model="eventDate"
                    :first-day-of-week="1"
                    placeholder="Click to select...">

                    <button class="button is-primary"
                        @click="date = new Date()">
                        <b-icon icon="calendar-today"></b-icon>
                        <span>Today</span>
                    </button>

                    <button class="button is-danger"
                        @click="eventDate = null">
                        <b-icon icon="close"></b-icon>
                        <span>Clear</span>
                    </button>
                </b-datepicker>
                <b-datepicker v-model="eventDate"
                    :first-day-of-week="1"
                    placeholder="Click to select...">
                </b-datepicker>
            </b-field>         
            <b-field label="イベント詳細">
                <b-input
                  type="textarea"
                  :value="eventDetail"
                  placeholder="イベント詳細"
                >
                </b-input>
            </b-field>

        </section>
        <footer class="modal-card-foot">
            <!-- <button class="button" type="button" @click="$parent.close()">Close</button> -->
            <button @click="startCount()" class="button is-primary">カウント開始</button>
        </footer>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    eventName: {
      type:String,
      default:''
    },
    eventDate: {
      type:Date,
      default:new Date()
    },
    eventDetail: {
      type:String,
      default:''
    }
  },
  data() {
    return {

    }
  }
}
</script>