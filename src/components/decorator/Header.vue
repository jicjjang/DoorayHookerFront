<template>
  <div class="row">
    <div class="col-xs-12">
      <header>
        <h1 class="col-xs-8">Dooray Hooker</h1>
        <h4 class="col-xs-4">
          <label for="light">Toggle the Light!</label>
          <button type="button" name="button" class="btn btn-danger" @click="toggleLight" v-if="this.status">turn off</button>
          <button type="button" name="button" class="btn btn-primary" @click="toggleLight" v-else>turn on</button>
        </h4>
      </header>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'status'
    ])
  },
  methods: {
    ...mapActions([
      'saveStatus'
    ]),
    toggleLight () {
      this.saveStatus(!this.status)
    }
  }
}
</script>

<style lang="css">
</style>
