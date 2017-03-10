<template>
  <div class="row">
    <app-scheduler-list :scheduleDataList="scheduleList"></app-scheduler-list>
    <app-add-scheduler :saveData="saveData"></app-add-scheduler>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import SchedulerList from './SchedulerList.vue'
import AddScheduler from './AddScheduler.vue'

export default {
  computed: {
    ...mapGetters([
      'scheduleList'
    ])
  },
  components: {
    appSchedulerList: SchedulerList,
    appAddScheduler: AddScheduler
  },
  methods: {
    ...mapActions([
      'saveData'
    ])
  }
}
</script>

<style lang="css">
</style>
