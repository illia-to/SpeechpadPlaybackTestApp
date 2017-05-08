var app = {
  // Application Constructor
  initialize: function () {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function () {
    this.receivedEvent('deviceready');
  },

  // Update DOM on a Received Event
  receivedEvent: function (id) {
    // Audio player
    var audioPlayer = new MediaPlayer('#audioPlayer', 'audio/conv.mp3');
    var playPauseButton = document.querySelector('#audioPlayer > i[name=play]');
    var stopButton = document.querySelector('#audioPlayer > i[name=stop]');
    var seekButton = document.querySelector('#audioPlayer > div > button[name=seek]');

    playPauseButton.addEventListener('touchend', function () {
			audioPlayer.playPause();
			this.className = audioPlayer.isPlaying ? "fa fa-pause fa-2x" : "fa fa-play fa-2x";
		}, false);
    stopButton.addEventListener('touchend', function () {
			audioPlayer.stop();
			playPauseButton.className = "fa fa-play fa-2x";
		}, false);
    seekButton.addEventListener('touchend',function () {
			audioPlayer.seek();
		} , false);

    // Recorder Audio Player
    var audioRecord = 'record.wav'

    var recordPlayer = new MediaPlayer('#recordPlayer', audioRecord);
    var recordPlayPauseButton = document.querySelector('#recordPlayer > i[name=play]');
    var recordStopButton = document.querySelector('#recordPlayer > i[name=stop]');
    var recordRecordButton = document.querySelector('#recordPlayer > i[name=record]');

    recordPlayPauseButton.addEventListener('touchend', function () {
			this.className = recordPlayer.isPlaying ? "fa fa-play fa-2x" : "fa fa-pause fa-2x";
			recordPlayer.playPause();
		}, false);
    recordRecordButton.addEventListener('touchend', function () {
			this.style.color = "red";
			recordPlayer.startRecord();
		}, false);
    recordStopButton.addEventListener('touchend', function () {
			document.querySelector("#recordPlayer > i[name=record]").style.color = "black";
			recordPlayer.stopRecord();
		}, false);

		// Navigation
		var playBtn = document.querySelector('#play');
		var recordBtn = document.querySelector('#record');

		playBtn.addEventListener('touchend', updatePlayVisibility, false);
		recordBtn.addEventListener('touchend', updateRecordVisibility, false);

  }
};

function  updatePlayVisibility () {
	document.getElementById('audioPlayer').style.display = 'block';
	document.getElementById('recordPlayer').style.display = 'none';
}

function  updateRecordVisibility () {
	document.getElementById('audioPlayer').style.display = 'none';
	document.getElementById('recordPlayer').style.display = 'block';
}

app.initialize();
