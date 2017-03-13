<template>
  <div class="col-xs-12 col-sm-4 col-md-4">
    <h1>Add Scheduler</h1>
    <div class="form-group">
      <label for="id">ID</label>
      <input type="text" name="id" v-model="schedule.id" placeholder="채팅방 ID"/>
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <input type="text" name="description" v-model="schedule.description" placeholder="봇에 대한 설명"/>
    </div>
    <div class="form-group">
      <label for="imageUrl">Image Url</label>
      <input type="text" name="imageUrl" v-model="schedule.image" placeholder="봇 이미지 url"/>
    </div>
    <div class="form-group">
      <label for="hookTime">Hook Time</label>
      <input type="text" name="hookTime" v-model="schedule.hookTime"placeholder="09:00"/>
    </div>
    <div class="form-group">
      <label for="name">Bot name</label>
      <input type="text" name="name" v-model="schedule.name" placeholder="봇 이름">
    </div>
    <div class="form-group">
      <label for="text">Bot Text</label>
      <input type="text" name="text" v-model="schedule.data.text" placeholder="내용">
    </div>
    <hr>
    <div class="form-group">
      <button class="btn btn-primary" @click="filteredSaveData">Submit</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => {
    return {
      schedule: {
        hookType: 'dooray-message',
        id: '',
        description: '',
        image: '',
        hookTime: '',
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
      'saveData'
    ]),
    filteredSaveData () {
      if (this.schedule.id === 'url' || this.schedule.id === '') {
        alert('url 입력을 안함.')
      } else if (this.schedule.hookTime.length !== 5) {
        alert('시간은 02:00 같은 구조로 써주세요.')
      } else {
        this.saveData(this.schedule)
      }
    }
  }
}
</script>

<style scoped>
  textarea {
    height: 320px;
  }

  button {
    margin-top: 10px;
  }
</style>
