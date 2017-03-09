<template>
  <div class="col-xs-12 col-sm-8 col-md-8">
    <h1>Scheduler List</h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="index in 5">
          Server #{{ index }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
