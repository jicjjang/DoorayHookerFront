<template>
  <div class="col-xs-12" v-if="schedule">
    <textarea class="form-control" type="text" v-model="schedule"></textarea>
    <button class="btn btn-danger" @click="checkSave">Save</button>
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
    },
    checkSave () {
      if (confirm('Really Save?')) {
        this.modifyData({key: this.$route.params.id, schedule: this.schedule})
      }
    }
  },
  created () {
    this.getData(this.$route.params.id)
  }
}
</script>

<style scoped>
  textarea {
    height: 200px;
  }

  button {
    margin: 10px 0 0 0;
  }
</style>
