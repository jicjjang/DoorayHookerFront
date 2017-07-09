<template>
  <div class="col-xs-12" v-if="schedule">
    <h1>Edit Scheduler</h1>
    <div class="form-group">
      <label for="id">ID</label>
      <input type="text" name="id" v-model="schedule.id"/>
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <input type="text" name="description" v-model="schedule.description"/>
    </div>
    <div class="form-group">
      <label for="hookType">Hook Type</label>
      <select v-model="schedule.hookType" class="form-control">
        <option value="dooray-message" :selected="schedule.hookType === 'dooray-message'">Message</option>
        <option value="dooray-menu" :selected="schedule.hookType === 'dooray-menu'">Menu</option>
        <option value="dooray-commit" :selected="schedule.hookType === 'dooray-commit'">Github Today Commit</option>
      </select>
    </div>
    <div class="form-group" v-if="schedule.hookType === 'dooray-menu'">
      <label for="hookMenuType">Hook Menu Type</label>
      <select v-model="schedule.hookMenuType" class="form-control">
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>
    </div>
    <div class="form-group" v-if="schedule.hookType === 'dooray-commit'">
      <label for="githubIds">Github Ids</label>
      <input type="text" name="githubIds" v-model="schedule.githubIds" placeholder="jicjjang, godori, ..."/>
    </div>
    <div class="form-group" v-if="schedule.hookType === 'dooray-commit'">
      <label for="text">Message for committers</label>
      <input type="text" name="text" v-model="schedule.data.committer" placeholder="Good job!">
    </div>
    <div class="form-group" v-if="schedule.hookType === 'dooray-commit'">
      <label for="text">Message for none committers</label>
      <input type="text" name="text" v-model="schedule.data.nonecommitter" placeholder="cheer up...">
    </div>
    <div class="form-group">
      <label for="imageUrl">Image Url</label>
      <input type="text" name="imageUrl" v-model="schedule.image" placeholder="봇 이미지 url"/>
    </div>
    <div class="form-group">
      <label for="hookTime">Hook Time</label>
      <input type="text" name="hookTime" placeholder="09:00" v-model="schedule.hookTime"/>
    </div>
    <div class="form-group">
      <label for="hookTerm">Hook Term</label>
      <select v-model="schedule.hookTerm" class="form-control">
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
      <input type="text" name="name" v-model="schedule.name">
    </div>
    <div class="form-group">
      <label for="text">Bot Text</label>
      <input type="text" name="text" v-model="schedule.data.text">
    </div>
    <hr>
    <div class="form-group">
      <button class="btn btn-danger" @click="checkSave">Save</button>
      <router-link :to="`/scheduler/${$route.params.id}`" class="btn btn-primary" tag="button">Cancel</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      schedule: {
        hookType: 'dooray-message',
        hookMenuType: 'lunch',
        id: '',
        description: '',
        githubIds: '',
        image: '',
        hookTime: '',
        hookTerm: '',
        name: '',
        data: {
          text: '',
          committer: '',
          nonecommitter: ''
          // ,
          // attachments: [
          //   {
          //     title: '',
          //     titleLink: '',
          //     text: '',
          //     color: ''
          //   }
          // ]
        }
      }
    }
  },
  methods: {
    ...mapActions([
      'modifyData'
    ]),
    getData (key) {
      this.$http.get(`data/${key}.json`).then(res => {
        this.schedule.id = res.body.id
        this.schedule.description = res.body.description
        this.schedule.hookType = res.body.hookType
        this.schedule.hookMenuType = res.body.hookMenuType
        this.schedule.githubIds = res.body.githubIds
        this.schedule.data.committer = res.body.data.committer
        this.schedule.data.nonecommitter = res.body.data.nonecommitter
        this.schedule.image = res.body.image
        this.schedule.hookTime = res.body.hookTime
        this.schedule.hookTerm = res.body.hookTerm
        this.schedule.name = res.body.name
        this.schedule.data.text = res.body.data.text
      })
    },
    checkSave () {
      if (confirm('Really Save?')) {
        this.schedule.image = decodeURIComponent(this.schedule.image)
        this.modifyData({key: this.$route.params.id, data: this.schedule})
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
