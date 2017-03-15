<template>
  <div class="row">
    <app-scheduler-list></app-scheduler-list>
    <app-add-scheduler></app-add-scheduler>
  </div>
</template>

<script>
import SchedulerList from './SchedulerList.vue'
import AddScheduler from './AddScheduler.vue'

export default {
  components: {
    appSchedulerList: SchedulerList,
    appAddScheduler: AddScheduler
  }
}
</script>

<style lang="css">
</style>
