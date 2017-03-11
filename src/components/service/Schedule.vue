<template>
  <li class="list-group-item" >
    <h4>Bot Description : {{ schedule.description }}</h4>
    <hr>
    <h4>Bot Name : '{{ schedule.name }}'</h4>
    <h4>Bot Type : '{{ schedule.hookType }}'</h4>
    <h4>Time : {{ schedule.hookTime }}</h4>
  </li>
</template>

<script>
export default {
  props: ['schedule']
}
</script>

<style lang="css">
</style>
