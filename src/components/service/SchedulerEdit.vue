<template>
  <div class="col-xs-12" v-if="schedule">
    {{ schedule }}
    <textarea class="form-control" type="text" v-model="schedule"></textarea>
    <button class="btn btn-danger" @click="modifyData({key: $route.params.id, schedule})">Save</button>
    <router-link :to="`/scheduler/${$route.params.id}`" class="btn btn-primary" tag="button">Cancel</router-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      schedule: null
    }
  },
  methods: {
    ...mapActions([
      'modifyData'
    ]),
    getData (key) {
      this.$http.get(`data/${key}.json`).then(res => {
        this.schedule = JSON.stringify(res.body)
      })
    }
    // ,
    // checkSave () {
    //   if (confirm('Really Save?')) {
    //     console.log(this.schedule)
    //     this.modifyData(this.$route.params.id, this.schedule)
    //   }
    // }
  },
  created () {
    this.getData(this.$route.params.id)
  }
}
</script>

<style scoped>
  textarea {
    height: 50px;
  }
</style>
