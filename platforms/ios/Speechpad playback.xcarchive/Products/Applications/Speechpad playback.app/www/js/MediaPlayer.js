var MediaPlayer = function (containerId, mediaUrl) {
  this.mediaUrl = mediaUrl;
  this.container = document.querySelector(containerId);
  this.progressBar = this.container.querySelector("progress");
  this.isPlaying = false;
  this.url = device.platform.toLowerCase() === "android" ? "/android_asset/www/" + this.mediaUrl : this.mediaUrl;
  this.media = new Media(this.url);
  this.duration = 0;
  this.barInterval;
}

MediaPlayer.prototype.updateBar = function () {
  var that = this;
  var durationTitle = that.container.querySelector("span[name=duration]");

  return setInterval(function () {
      that.media.getCurrentPosition(
          // success callback
          function (sec) {
            that.duration = that.media.getDuration();

            // Duration can be -1 if file is not played
    			  var correctDuration = that.duration > 0 ? that.duration : 0;

            durationTitle.innerText = correctDuration.toString();
            that.progressBar.max = correctDuration;
            that.progressBar.value = sec;
          },
          function (e) {
            console.log("Error getting pos=" + e);
          }
        );
      }, 1000);
}

MediaPlayer.prototype.playPause = function () {
  if (this.isPlaying) {
    this.isPlaying = false;
    clearInterval(this.barInterval);
    this.media.pause();
  } else {
    this.media.play();
    this.isPlaying = true;
    this.barInterval = this.updateBar();
  }

  // Stop record if in progress
  this.media.stopRecord();
}

MediaPlayer.prototype.stop = function () {
  this.isPlaying = false;
  this.media.stop();
  this.progressBar.value = 0;
  clearInterval(this.barInterval);
}

MediaPlayer.prototype.seek =  function () {
  var seekInput = this.container.querySelector('input');
  var goToSecond = seekInput.value;
  if (goToSecond && parseInt(goToSecond)) {
    this.media.seekTo(goToSecond * 1000);
  } else {
    alert('Value mast be numeric');
  }

  seekInput.value = '';

}

MediaPlayer.prototype.startRecord =  function () {
  this.media.startRecord();
}

MediaPlayer.prototype.stopRecord = function () {
  this.media.stopRecord();
}
