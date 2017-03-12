<template>
  <div class="col-xs-12" v-if="schedule">
    <h4>Bot Description : {{ schedule.description }}</h4>
    <hr>
    <h4>Image Url : '{{ schedule.image }}'</h4>
    <h4>Bot Name : '{{ schedule.name }}'</h4>
    <h4>Bot Type : '{{ schedule.hookType }}'</h4>
    <h4>Time : {{ schedule.hookTime }}</h4>
    <hr>
    <span v-if="schedule.data">
      <h4>Data -> text : {{ schedule.data.text }}</h4>
      <h4>Data -> attachments -> title : '{{ schedule.data.attachments[0].title }}'</h4>
      <h4>Data -> attachments -> text : '{{ schedule.data.attachments[0].text }}'</h4>
      <h4>Data -> attachments -> titleLink : '{{ schedule.data.attachments[0].titleLink }}'</h4>
      <h4>Data -> attachments -> color : '{{ schedule.data.attachments[0].color }}'</h4>
    </span>
    <button class="btn btn-danger" @click="checkRemove">Remove</button>
    <router-link :to="`/scheduler/${$route.params.id}/edit`" class="btn btn-primary" tag="button">Edit</router-link>
    <router-link to="/" class="btn btn-primary" tag="button">Back</router-link>
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
      'removeData'
    ]),
    getData (key) {
      this.$http.get(`data/${key}.json`).then(res => {
        this.schedule = res.body
      })
    },
    checkRemove () {
      if (confirm('Really remove?')) {
        this.removeData(this.$route.params.id)
      }
    }
  },
  created () {  // Created is just call. Not passing data.
    this.getData(this.$route.params.id)
  }
}
</script>

<style scoped>
  button {
    float: right;
    margin: 5px;
  }
  button::after {
    content: '';
    display: table;
    clear: both;
  }
</style>
