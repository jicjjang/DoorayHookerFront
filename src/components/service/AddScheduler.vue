<template>
  <div class="col-xs-12 col-sm-4 col-md-4">
    <h1>Add Scheduler</h1>
    <div class="form-group">
      <label>Project Id</label>
      <textarea class="form-control" type="text">"hookType": "dooray-message",
"hookId": "HOOK_URL",
"image": "ICON_IMAGE_URL",
"time": "18:30"
"name": "GoHomeBot",
"data" : {
	"text": "WeAreGoToHomeNow!",
	"attachments": [{
    "title": "SUBJECT",
    "titleLink": "LINK",
    "text": "CONTEXT",
    "color": "blue"
  }]
}</textarea>
<button class="btn btn-primary" @click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  textarea {
    height: 120px;
  }

  button {
    margin-top: 10px;
  }
</style>

<!-- {
	"hookType": "dooray-message",
	"hookId": "https://hook.dooray.com/services/1708537453772223384/1850576101103842819/tEthH-nMTbK8LUIg30k6Gg",
	"image": "http://media02.hongkiat.com/danbo-photography/rainy-days.jpg",
	"name": "how about korean?",
	"data" : {
		"text": "왜이래",
		"attachments": [{
	      "title": "title",
	      "titleLink": "naver.com",
	      "text": "text",
	      "color": "blue"
	    }]
	}
} -->
