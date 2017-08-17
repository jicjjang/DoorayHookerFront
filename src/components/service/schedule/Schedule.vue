<template>
  <li class="list-group-item"
      @mouseenter="isActive = true"
      @mouseleave="isActive = false"
      :class="{ active: isActive }"
      v-if="index !== 'status'">
    <router-link :to="`/scheduler/${index}`" tag="div">
      <h4>Bot Description : {{ schedule.description }}</h4>
      <hr>
      <h4>Bot Name : '{{ schedule.name }}'</h4>
      <h4 v-if="schedule.hookType === 'dooray-message'">Type : Message</h4>
      <h4 v-else-if="schedule.hookType === 'dooray-culture'">Type : Culture Show Information</h4>
      <h4 v-else-if="schedule.hookType === 'dooray-menu'">Type : Menu - {{ schedule.hookMenuType }}</h4>
      <h4 v-else-if="schedule.hookType === 'dooray-commit'">Type : Github Today Commit</h4>
      <h4>Time : {{ schedule.hookTime }}</h4>
      <h4 v-if="schedule.hookTerm === '0' || schedule.hookTerm === '' || schedule.hookTerm == null">Term : 없음</h4>
      <h4 v-else>Term : {{ schedule.hookTerm }}분</h4>
    </router-link>
  </li>
</template>

<script>
export default {
  props: ['schedule', 'index'],
  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style scoped>
</style>
