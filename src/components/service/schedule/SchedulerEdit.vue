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
      <label for="imageUrl">Image Url</label>
      <input type="text" name="imageUrl" v-model="schedule.image"/>
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
        id: '',
        description: '',
        image: '',
        hookTime: '',
        hookTerm: '',
        name: '',
        data: {
          text: ''
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
        this.schedule.image = res.body.image
        this.schedule.hookTime = res.body.hookTime
        this.schedule.hookTerm = res.body.hookTerm
        this.schedule.name = res.body.name
        this.schedule.data.text = res.body.data.text
      })
    },
    checkSave () {
      if (confirm('Really Save?')) {
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
