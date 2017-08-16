<template>
  <div class="col-xs-12" v-if="this.schedule">
    <h1>Edit Scheduler</h1>
    <div class="form-group">
      <label for="id">ID</label>
      <input type="text" name="id" v-model="this.schedule.id"/>
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <input type="text" name="description" v-model="this.schedule.description"/>
    </div>
    <div class="form-group">
      <label for="hookType">Hook Type</label>
      <select v-model="this.schedule.hookType" class="form-control">
        <option value="dooray-message" :selected="this.schedule.hookType === 'dooray-message'">Message</option>
        <option value="dooray-menu" :selected="this.schedule.hookType === 'dooray-menu'">Menu</option>
        <option value="dooray-commit" :selected="this.schedule.hookType === 'dooray-commit'">Github Today Commit</option>
      </select>
    </div>
    <div class="form-group" v-if="this.schedule.hookType === 'dooray-menu'">
      <label for="hookMenuType">Hook Menu Type</label>
      <select v-model="this.schedule.hookMenuType" class="form-control">
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>
    </div>
    <div class="form-group" v-if="this.schedule.hookType === 'dooray-commit'">
      <label for="githubIds">Github Ids</label>
      <input type="text" name="githubIds" v-model="this.schedule.githubIds" placeholder="jicjjang, godori, ..."/>
    </div>
    <div class="form-group" v-if="this.schedule.hookType === 'dooray-commit'">
      <label for="text">Message for committers</label>
      <input type="text" name="text" v-model="this.schedule.data.committer" placeholder="Good job!">
    </div>
    <div class="form-group" v-if="this.schedule.hookType === 'dooray-commit'">
      <label for="text">Message for none committers</label>
      <input type="text" name="text" v-model="this.schedule.data.nonecommitter" placeholder="cheer up...">
    </div>
    <div class="form-group">
      <label for="imageUrl">Image Url</label>
      <input type="text" name="imageUrl" v-model="this.schedule.image" placeholder="봇 이미지 url"/>
    </div>
    <div class="form-group">
      <label for="hookTime">Hook Time</label>
      <input type="text" name="hookTime" placeholder="09:00" v-model="this.schedule.hookTime"/>
    </div>
    <div class="form-group">
      <label for="hookTerm">Hook Term</label>
      <select v-model="this.schedule.hookTerm" class="form-control">
        <option value="0">없음</option>
        <option value="5">5분</option>
        <option value="10">10분</option>
        <option value="15">15분</option>
        <option value="30">30분</option>
        <option value="60">60분</option>
      </select>
    </div>
    <div class="form-group">
      <label for="name">Bot name</label>
      <input type="text" name="name" v-model="this.schedule.name">
    </div>
    <div class="form-group">
      <label for="text">Bot Text</label>
      <input type="text" name="text" v-model="this.schedule.data.text">
    </div>
    <hr>
    <div class="form-group">
      <button class="btn btn-danger" @click="checkSave">Save</button>
      <router-link :to="`/scheduler/${$route.params.id}`" class="btn btn-primary" tag="button">Cancel</router-link>
    </div>
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
      'modifyData'
    ]),
    checkSave () {
      if (confirm('Really Save?')) {
        this.schedule.image = decodeURIComponent(this.schedule.image)
        this.modifyData({key: this.$route.params.id, data: this.schedule})
      }
    }
  },
  created () {
    this.setId(this.$route.params.id)
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
