var React = require('react');
var View = require('./View.react');
var Upload = require('./Upload.react');

var UploadAndView = React.createClass({

  getInitialState: function () {
    return {
      isPlaying: false,
      videoId: 'e-ORhEE9VVg',
      data: {
        0: 'This is the first second.',
        1: 'This is the second second.'
      }
    };
  },

  handlePlay: function (videoId, data) {
    this.setState({
      isPlaying: true,
      data: data,
      videoId: videoId
    });
  },

  render: function () {
    if (this.state.isPlaying) {
      return (
        <View videoId={this.state.videoId} data={this.state.data} />
      );
    } else {
      return (
        <Upload onPlay={this.handlePlay} />
      );
    }
  }
});

module.exports = UploadAndView;
