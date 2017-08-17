<template>
  <div class="col-xs-12" v-if="this.schedule">
    <h4>Bot Description : {{ this.schedule.description }}</h4>
    <hr>
    <h4>ID (Url) : '{{ this.schedule.id }}'</h4>
    <h4>Image Url : '{{ this.schedule.image }}'</h4>
    <h4>Bot Name : '{{ this.schedule.name }}'</h4>
    <h4 v-if="this.schedule.hookType === 'dooray-message'">Bot Type : Message</h4>
    <h4 v-else-if="this.schedule.hookType === 'dooray-culture'">Bot Type : Culture Show Information</h4>
    <h4 v-else-if="this.schedule.hookType === 'dooray-menu'">Bot Type : Menu - {{ this.schedule.hookMenuType }}</h4>
    <h4 v-else-if="this.schedule.hookType === 'dooray-commit'">Github Ids - {{ this.schedule.githubIds }}</h4>
    <h4 v-if="this.schedule.hookType === 'dooray-commit'">Message for Committer : {{ this.schedule.data.committer }}</h4>
    <h4 v-if="this.schedule.hookType === 'dooray-commit'">Message for None Committer : {{ this.schedule.data.nonecommitter }}</h4>
    <h4>Start Time : {{ this.schedule.hookTime }}</h4>
    <h4 v-if="this.schedule.hookTerm === '0' || this.schedule.hookTerm === '' || this.schedule.hookTerm == null">Term : 없음</h4>
    <h4 v-else>Term : {{ this.schedule.hookTerm }}분</h4>
    <h4>Text : {{ this.schedule.data.text }}</h4>
    <hr>
    <button class="btn btn-danger" @click="checkRemove">Remove</button>
    <router-link :to="`/scheduler/${$route.params.id}/edit`" class="btn btn-primary" tag="button">Edit</router-link>
    <router-link to="/" class="btn btn-primary" tag="button">Back</router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'schedule'
    ])
  },
  methods: {
    ...mapActions([
      'setId',
      'removeData'
    ]),
    checkRemove () {
      if (confirm('Really remove?')) {
        this.removeData(this.$route.params.id)
      }
    }
  },
  created () {
    this.setId(this.$route.params.id)
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
