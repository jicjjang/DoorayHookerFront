<template>
  <div class="col-xs-12 col-sm-8 col-md-8">
    <h1>Scheduler List</h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="(schedule, key) in scheduleDataList" :key="key">
        <h4>Bot Description : {{ schedule.description }}</h4>
        <hr>
        <h4>Bot Name : '{{ schedule.name }}'</h4>
        <h4>Bot Type : '{{ schedule.hookType }}'</h4>
        <h4>Time : {{ schedule.hookTime }}</h4>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['scheduleDataList']
}
</script>

<style lang="css">
</style>
