<template>
  <div class="col-xs-12 col-sm-8 col-md-8">
    <h1>Scheduler List</h1>
    <ul class="list-group">
      <app-schedule v-for="(schedule, index) in scheduleList" :key="index" :index="index" :schedule="schedule"></app-schedule>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Schedule from './Schedule.vue'

export default {
  components: {
    appSchedule: Schedule
  },
  computed: {
    ...mapGetters([
      'scheduleList'
    ])
  }
}
</script>

<style lang="css">
</style>
