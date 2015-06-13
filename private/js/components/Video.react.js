var React = require('react');

var Video = React.createClass({

  videoId: 'e-ORhEE9VVg',
  player: null,
  elapsedTime: 0,
  elapsedTimeInterval: null,

  onYouTubeIframeAPIReady: function () {
    this.player = new YT.Player('player', {
      width: '100%',
      height: '100%',
      videoId: this.videoId,
      events: {
        'onReady': this.onPlayerReady,
        'onStateChange': this.onPlayerStateChange
      }
    });
  },

  onPlayerReady: function (event) {
    this.props.onPlayerReady();
  },

  onPlayerStateChange: function (event) {

    this.elapsedTime = event.target.getCurrentTime() * 1000;
    this.props.onElapsedTimeChange(this.elapsedTime);

    if (event.data === YT.PlayerState.PLAYING) {

      clearInterval(this.elapsedTimeInterval);
      this.elapsedTimeInterval = setInterval(function () {

        this.elapsedTime = this.elapsedTime + 172;

        this.props.onElapsedTimeChange(this.elapsedTime);

      }.bind(this), 170);

    } else if (event.data === YT.PlayerState.PAUSED) {

      clearInterval(this.elapsedTimeInterval);

    } else if (event.data === YT.PlayerState.BUFFERING) {

      clearInterval(this.elapsedTimeInterval);

    } else if (event.data === YT.PlayerState.CUED) {

      clearInterval(this.elapsedTimeInterval);
    }
  },

  componentDidMount: function () {
    this.createPlayer();
  },

  handleOnYouTubeIframeAPIReady: function () {
    /*
    The API will call this function when the page has finished
    downloading the JavaScript for the player API,
    which enables you to then use the API on your page.
    Thus, this function might create the player objects that you want to
    display when the page loads.
    */

    window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady;
  },

  loadIFrameAPIAsynchronously: function () {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  },

  createPlayer: function () {
    this.handleOnYouTubeIframeAPIReady();
    this.loadIFrameAPIAsynchronously();
  },

  render: function () {
    return (
      <div id="player"></div>
    );
  }
});

module.exports = Video;
