<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
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
  .slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }
  .slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>
