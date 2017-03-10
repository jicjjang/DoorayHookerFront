<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <router-view></router-view>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Header from './components/decorator/Header.vue'
import Footer from './components/decorator/Footer.vue'

export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  },
  methods: {
    ...mapActions([
      'initData'
    ])
  },
  created () {
    this.initData()
  }
}
</script>

<style>
</style>
