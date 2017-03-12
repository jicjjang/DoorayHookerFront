<template>
  <li class="list-group-item"
      @mouseenter="isActive = true"
      @mouseleave="isActive = false"
      :class="{ active: isActive }">
    <router-link :to="`/scheduler/${index}`" tag="div">
      <h4>Bot Description : {{ schedule.description }}</h4>
      <hr>
      <h4>Bot Name : '{{ schedule.name }}'</h4>
      <h4>Time : {{ schedule.hookTime }}</h4>
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
