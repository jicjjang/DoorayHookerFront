<template>
  <div class="col-xs-12 col-sm-4 col-md-4">
    <h1>Add Scheduler</h1>
    <div class="form-group">
      <textarea class="form-control" type="text" v-model="schedule"></textarea>
      <button class="btn btn-primary" @click="saveData(schedule)">Submit</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => {
    return {
      schedule: `{
    "hookType": "dooray-message",
    "id": "HOOK_URL",
    "description": "설명",
    "image": "ICON_IMAGE_URL",
    "hookTime": "18:30",
    "name": "GoHomeBot",
    "data" : {
        "text": "WeAreGoToHomeNow!",
        "attachments": [{
            "title": "SUBJECT",
            "titleLink": "LINK",
            "text": "CONTEXT",
            "color": "blue"
        }]
    }
}`
    }
  },
  methods: {
    ...mapActions([
      'saveData'
    ])
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
